import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import { Box } from "~/components/Box";
import { OrderPriceList, OrderRow } from "~/components/OrderPriceList";
import { Text } from "~/components/Text";
import { Button } from "~/components/Button";
import { OrderHead } from "~/components/OrderHead";
import { Order } from "~/types";
import { SelectBox } from "~/components/SelectBox";

const LastMessage = ({ data }) => {
  const item = JSON.stringify(data);

  if (item.feed === "book") {
    console.log(
      "file: OrderbookScreen.tsx ~ line 16 ~ LastMessage ~ data.feed",
      data.feed
    );
    const item: Order = data.feed;

    return <OrderRow item={item} key={item.timestamp} />;
  }

  return (
    <>
      <Text variant="p2">Last message:</Text>
      <Text>{data}</Text>
    </>
  );
};

const OrderbookScreen = () => {
  const messageHistory = useRef([]);

  const [isLoading, setIsLoading] = useState(false);
  const didUnmount = useRef(false);

  const { sendMessage, lastMessage, readyState } = useWebSocket(
    "wss://www.cryptofacilities.com/ws/v1",
    {
      shouldReconnect: (closeEvent) => {
        /*
          useWebSocket will handle unmounting for you, but this is an example of a
          case in which you would not want it to automatically reconnect
        */
        return didUnmount.current === false;
      },
      reconnectAttempts: 10,
      reconnectInterval: 3000,
    }
  );

  useEffect(() => {
    return () => {
      didUnmount.current = true;
    };
  }, []);

  messageHistory.current = useMemo(
    () => messageHistory.current.concat(lastMessage),
    [lastMessage]
  );

  const handleSendMessage = useCallback(() => {
    sendMessage(
      `{"event":"subscribe","feed":"book","product_ids":["PI_XBTUSD"]}`
    );
    setIsLoading(false);
  }, [sendMessage]);

  const handleClose = useCallback(() => {
    sendMessage(`{"event":"close"}`);
  }, [sendMessage]);

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
      <OrderHead />

      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Button
          backgroundColor="primary"
          onPress={handleSendMessage}
          disabled={readyState !== ReadyState.OPEN}
        >
          Subscribe
        </Button>
        <Button backgroundColor="danger" onPress={handleClose}>
          Kill connection
        </Button>
        <Text>WebSocket: {connectionStatus}</Text>
      </Box>

      {lastMessage && <LastMessage data={lastMessage.data} />}

      <Box mt="m">
        <Text variant="p2">History:</Text>
        {/* {messageHistory.current.map((message, idx) => {
          if (message) {
            const data = JSON.parse(message.data);

            // return <Text key={idx}>{message.data}</Text>;
            // return <Text key={idx}>{event}</Text>;
            return (

            );
          }

          return null;
        })} */}
        <OrderPriceList data={messageHistory.current} isLoading={isLoading} />
      </Box>
    </Box>
  );
};

export default OrderbookScreen;
