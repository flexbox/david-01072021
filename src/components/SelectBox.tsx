import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";

import { Box } from "./Box";
import { Button } from "./Button";

import theme from "~/theme/theme";

const MARKET_TICKETS = [
  { id: 1, value: 0.5 },
  { id: 2, value: 1 },
  { id: 3, value: 2.5 },
];

export const SelectBox = () => {
  const [toggleSelect, setToggleSelect] = useState<boolean>(false);

  const handleToggle = () => {
    setToggleSelect(!toggleSelect);
  };

  const handleSelect = () => {
    // change context
  };

  const SelectButton = ({ item }) => {
    return <Button onPress={handleSelect}> {item.value}</Button>;
  };

  const Select = () => {
    return (
      <Box
        position="absolute"
        top={48}
        left={0}
        backgroundColor="white"
        zIndex={3}
        elevation={3}
      >
        {MARKET_TICKETS.map((item) => {
          return <SelectButton item={item} key={item.id} />;
        })}
      </Box>
    );
  };

  const renderIcon = () => (
    <Entypo.Button
      name="chevron-small-down"
      size={theme.icon.m}
      color={theme.colors.icon}
      backgroundColor="transparent"
    />
  );

  return (
    <Box position="relative">
      <Button onPress={handleToggle} accessoryRight={renderIcon}>
        Group {MARKET_TICKETS[0].value}
      </Button>
      {toggleSelect && <Select />}
    </Box>
  );
};
