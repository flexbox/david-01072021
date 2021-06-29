import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import { Box } from "~/components/Box";
import { Button } from "~/components/Button";
import { OrderPriceList } from "~/components/OrderPriceList";
import { SelectBox } from "~/components/SelectBox";
import { queryClient } from "~/components/Providers";
import { Text } from "~/components/Text";
import { useReactQuerySubscription } from "~/hooks/useReactQuerySubscription";

const OrderbookScreen = () => {
  const send = useReactQuerySubscription();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [orderbook, setOrderbook] = useState([]);

  useEffect(() => {
    const data = queryClient.getQueryData("orderbook");
  });

  const handlePress = () => {
    setIsLoading(false);
    send({
      event: "subscribe",
      feed: "book",
      product_ids: ["PI_XBTUSD"],
    });
  };

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
        <SelectBox />
      </Box>
      <OrderPriceList data={orderbook} isLoading={isLoading} />
      <Button onPress={handlePress}>Open connexion</Button>
    </ScrollView>
  );
};

export default OrderbookScreen;
