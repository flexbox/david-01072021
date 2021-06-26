import React from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

import Providers from "~/components/Providers";
import OrderbookScreen from "~/screens/OrderbookScreen";
import { AnimatedAppLoader } from "~/components/AnimatedAppLoader";

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

export default function App() {
  return (
    <AnimatedAppLoader image={require("./assets/splash.png")}>
      <Providers>
        <StatusBar style="auto" />
        <OrderbookScreen />
      </Providers>
    </AnimatedAppLoader>
  );
}
