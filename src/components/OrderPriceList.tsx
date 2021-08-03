import React from "react";
import { VirtualizedList } from "react-native";

import { Box } from "./Box";
import { Text } from "./Text";

import theme from "~/theme/theme";
import { Order } from "~/types";

interface OrderPriceListProps {
  data: Order[];
}

const OrderSkeleton = () => {
  const data = new Array(10).fill("1");
  return (
    <>
      {data.map(() => (
        <Box
          flexDirection="row"
          justifyContent="space-between"
          height={theme.spacing.xl}
        >
          <Box flex={1} m="s" backgroundColor="skeletonBackground" />
          <Box flex={1} m="s" backgroundColor="skeletonBackground" />
          <Box flex={1} m="s" backgroundColor="skeletonBackground" />
        </Box>
      ))}
    </>
  );
};

export const OrderRow = ({ item }: { item: Order }) => {
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
      <Box flex={1} p="s" />
    </Box>
  );
};

export const OrderPriceList = ({ data, isLoading }: OrderPriceListProps) => {
  console.log(
    "file: OrderPriceList.tsx ~ line 52 ~ OrderPriceList ~ data",
    data
  );
  if (isLoading) {
    return <OrderSkeleton />;
  }

  if (data === null) {
    return <Text>No data</Text>;
  }

  if (data.event === "info") {
    return <Text>info</Text>;
  }
  if (data.event === "subscribed") {
    return <Text>subscribed</Text>;
  }

  if (data.feed === "book_snapshot") {
    return <Text>book_snapshot</Text>;
  }

  if (data.feed === "book") {
    const item: Order = data;

    const getItemCount = () => {
      return data.length;
    };

    const getItem = (data, index) => ({
      id: Math.random().toString(12).substring(0),
      title: `Item ${index + 1}`,
    });

    // return <OrderRow item={item} key={item.timestamp} />;
    return (
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={({ item }) => <OrderRow item={item} />}
        keyExtractor={(item) => item.timestamp}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    );
  }

  return <Text>Waiting data</Text>;
};
