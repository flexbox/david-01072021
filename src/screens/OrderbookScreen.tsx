import React from "react";
import { ScrollView } from "react-native";

import { orderbook } from "./api";

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
      <OrderPriceList data={orderbook} />
    </ScrollView>
  );
};

export default OrderbookScreen;
