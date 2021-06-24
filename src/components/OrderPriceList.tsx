import React from "react";

import { Box } from "./Box";
import { Text } from "./Text";

interface OrderPriceListProps {
  type: "buy" | "sell";
}

export const OrderPriceList = ({ type }: OrderPriceListProps) => {
  return (
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
};
