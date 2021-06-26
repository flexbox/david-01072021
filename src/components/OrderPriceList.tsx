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
      <Text variant="p2" color="textHint" textAlign="right">
        Price
      </Text>
    </Box>
    <Box flex={1} p="s">
      <Text variant="p2" color="textHint" textAlign="right">
        Size
      </Text>
    </Box>
    <Box flex={1} p="s">
      <Text variant="p2" color="textHint" textAlign="right">
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
      <Box flex={1} p="s">
        <Text variant="p1" color={item.side} textAlign="right">
          {item.price}
        </Text>
      </Box>
      <Box flex={1} p="s">
        <Text variant="p1" textAlign="right">
          {item.qty}
        </Text>
      </Box>
      <Box flex={1} p="s"></Box>
    </Box>
  );
};

export const OrderPriceList = ({
  data,
  isLoading = true,
}: OrderPriceListProps) => {
  if (isLoading) {
    return (
      <>
        <OrderHead />
        {[1, 2, 3, 4, 5, 6].map(() => (
          <OrderSkeleton />
        ))}
      </>
    );
  }

  return (
    <>
      <OrderHead />
      {data.map((item: Order) => {
        return <OrderRow item={item} key={item.timestamp} />;
      })}
    </>
  );
};
