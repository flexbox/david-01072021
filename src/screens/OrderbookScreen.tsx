import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import { Box } from "~/components/Box";
import { OrderPriceList } from "~/components/OrderPriceList";
import { OrderSelectBox } from "~/components/OrderSelectBox";
import { Text } from "~/components/Text";
import { useReactQuerySubscription } from "~/hooks/useReactQuerySubscription";

const OrderbookScreen = () => {
  const send = useReactQuerySubscription();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [orderbook, setOrderbook] = useState([]);

  useEffect(() => {
    // send({
    //   operation: "update",
    //   entity: ["orderbook"],
    //   payload: { event: "subscribe", feed: "book", product_ids: ["PI_XBTUSD"] },
    // });
  }, [send]);

  return (
    <ScrollView>
      <Box
        paddingHorizontal="m"
        paddingVertical="s"
        backgroundColor="surfaceBackground"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text variant="h2">Orderbook</Text>
        <OrderSelectBox />
      </Box>
      <OrderPriceList data={orderbook} isLoading={isLoading} />
    </ScrollView>
  );
};

export default OrderbookScreen;
