import React, { useCallback, useMemo, useRef } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import { Box } from "~/components/Box";
import { OrderPriceList } from "~/components/OrderPriceList";
import { SelectBox } from "~/components/SelectBox";
import { Text } from "~/components/Text";
import { Button } from "~/components/Button";

const OrderbookScreen = () => {
  const messageHistory = useRef([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(
    "wss://www.cryptofacilities.com/ws/v1"
  );

  messageHistory.current = useMemo(
    () => messageHistory.current.concat(lastMessage),
    [lastMessage]
  );

  const handleSendMessage = useCallback(
    () =>
      sendMessage(
        `{"event":"subscribe","feed":"book","product_ids":["PI_XBTUSD"]}`
      ),
    [sendMessage]
  );

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <Box>
      <Box
        paddingHorizontal="m"
        paddingVertical="s"
        backgroundColor="surfaceBackground"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text variant="h2">Orderbook</Text>
        <SelectBox />
      </Box>
      <OrderPriceList data={orderbook} />

      <Box flexDirection="row">
        <Button
          backgroundColor="primary"
          onPress={handleSendMessage}
          disabled={readyState !== ReadyState.OPEN}
        >
          Subscribe
        </Button>
        <Button
          backgroundColor="danger"
          onPress={handleSendMessage}
          disabled={readyState !== ReadyState.OPEN}
        >
          Close
        </Button>
        <Text>WebSocket: {connectionStatus}</Text>
      </Box>

      {lastMessage ? (
        <>
          <Text variant="p2">Last message:</Text>
          <Text>{lastMessage.data}</Text>
        </>
      ) : null}

      <Box mt="m">
        <Text variant="p2">History:</Text>
        {messageHistory.current.map((message, idx) => (
          <Text key={idx}>{message ? message.data : null}</Text>
        ))}
      </Box>
    </Box>
  );
};

export default OrderbookScreen;
