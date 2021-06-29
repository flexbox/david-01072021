import React, { ReactElement } from "react";
import { TouchableOpacity, View } from "react-native";
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
} from "@shopify/restyle";

import { Text } from "./Text";
import { Box } from "./Box";

import { Theme } from "~/theme/theme";

const restyleFunctions = [spacing, border, backgroundColor];

type ButtonProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {
    onPress: () => void;
    accessoryRight?: () => ReactElement;
    children?: React.ReactText;
  };

export const Button = ({
  onPress,
  accessoryRight,
  children,
  ...rest
}: ButtonProps) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity onPress={onPress}>
      <Box flexDirection="row" alignItems="center">
        <View {...props}>
          <Text variant="buttonLabel">{children}</Text>
        </View>
        {accessoryRight && accessoryRight()}
      </Box>
    </TouchableOpacity>
  );
};
