import React from "react";

import { Box } from "~/components/Box";
import { OrderPriceList } from "~/components/OrderPriceList";
import { OrderSelectBox } from "~/components/OrderSelectBox";
import { Text } from "~/components/Text";
import { useReactQuerySubscription } from "~/hooks/useReactQuerySubscription";

const OrderbookScreen = () => {
  const data = useReactQuerySubscription();
  console.log(
    "file: OrderbookScreen.tsx ~ line 9 ~ OrderbookScreen ~ data",
    data
  );

  const orderbook = [
    {
      feed: "book",
      product_id: "PI_XBTUSD",
      side: "buy",
      seq: 241709356,
      price: 33916.5,
      qty: 22286.0,
      timestamp: 1624542353450,
    },
    {
      feed: "book",
      product_id: "PI_XBTUSD",
      side: "sell",
      seq: 241709357,
      price: 33971.5,
      qty: 0.0,
      timestamp: 1624542353450,
    },
    {
      feed: "book",
      product_id: "PI_XBTUSD",
      side: "sell",
      seq: 241709358,
      price: 33973.5,
      qty: 33617.0,
      timestamp: 1624542353450,
    },
  ];

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
        <OrderSelectBox />
      </Box>
      <OrderPriceList data={orderbook} />
    </Box>
  );
};

export default OrderbookScreen;
