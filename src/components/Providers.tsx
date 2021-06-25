import React, { ReactChild, ReactChildren } from "react";
import { ThemeProvider } from "@shopify/restyle";
import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaView } from "react-native";

import { Box } from "~/components/Box";
import theme from "~/theme/theme";

interface ProvidersProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Box backgroundColor="mainBackground" flex={1}>
          <SafeAreaView>{children}</SafeAreaView>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
