import React from "react";
import { StatusBar } from "expo-status-bar";

import OrderbookScreen from "~/screens/OrderbookScreen";
import Providers from "~/components/Providers";

const App = () => (
  <Providers>
    <StatusBar style="auto" />
    <OrderbookScreen />
  </Providers>
);

export default App;
