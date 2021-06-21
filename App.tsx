import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@shopify/restyle";


import OrderbookScreen from "~/screens/OrderbookScreen";
import theme from "~/theme/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <StatusBar style="auto" />
    <OrderbookScreen />
  </ThemeProvider>
);

export default App;
