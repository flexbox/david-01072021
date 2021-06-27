import React from "react";

import { Box } from "~/components/Box";
import { Text } from "~/components/Text";

export const OrderHead = () => (
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
