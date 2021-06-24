import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";

import { Box } from "./Box";
import { Button } from "./Button";

import theme from "~/theme/theme";

interface Props {}

const MARKET_TICKETS = [0.5, 1, 2.5];

export const OrderSelectBox = (props: Props) => {
  const [toggleSelect, setToggleSelect] = useState<boolean>(false);

  const handlePress = () => {
    setToggleSelect(!toggleSelect);
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
    <Box>
      <Button onPress={handlePress} accessoryRight={renderIcon}>
        Group {MARKET_TICKETS[0]}
      </Button>
    </Box>
  );
};
