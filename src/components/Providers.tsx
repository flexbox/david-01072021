import React, { ReactChild, ReactChildren } from "react";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaView } from "react-native";

import { Box } from "~/components/Box";
import theme from "~/theme/theme";

interface ProvidersProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box backgroundColor="mainBackground" flex={1}>
        <SafeAreaView>{children}</SafeAreaView>
      </Box>
    </ThemeProvider>
  );
};

export default Providers;
