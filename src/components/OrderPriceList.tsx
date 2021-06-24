import React from "react";

import { Box } from "./Box";
import { Text } from "./Text";

import theme from "~/theme/theme";
import { Order } from "~/types";

interface OrderPriceListProps {
  data: Order[];
}

const OrderHead = () => (
  <Box flexDirection="row" justifyContent="space-between">
    <Box flex={1} p="s">
      <Text variant="p2" color="textHint" textAlign="center">
        Price
      </Text>
    </Box>
    <Box flex={1} p="s">
      <Text variant="p2" color="textHint" textAlign="center">
        Size
      </Text>
    </Box>
    <Box flex={1} p="s">
      <Text variant="p2" color="textHint" textAlign="center">
        Total
      </Text>
    </Box>
  </Box>
);

const OrderSkeleton = () => (
  <Box
    flexDirection="row"
    justifyContent="space-between"
    height={theme.spacing.xl}
  >
    <Box flex={1} m="s" backgroundColor="skeletonBackground" />
    <Box flex={1} m="s" backgroundColor="skeletonBackground" />
    <Box flex={1} m="s" backgroundColor="skeletonBackground" />
  </Box>
);

const OrderRow = ({ item }: { item: Order }) => {
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <Text variant="p1">{item.price}</Text>
    </Box>
  );
};

export const OrderPriceList = ({ data }: OrderPriceListProps) => {
  return (
    <>
      <OrderHead />
      <OrderSkeleton />
      <OrderSkeleton />
      {data.map((item: Order) => {
        return <OrderRow item={item} />;
      })}
    </>
  );
};
