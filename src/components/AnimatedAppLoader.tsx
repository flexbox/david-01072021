import React, { ReactChild, ReactChildren, ReactElement } from "react";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { Animated, ImageSourcePropType, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";

interface AnimatedSplashScreenProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  image: ImageSourcePropType;
}

const AnimatedSplashScreen = ({
  children,
  image,
}: AnimatedSplashScreenProps) => {
  const animation = React.useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = React.useState<boolean>(false);
  const [isSplashAnimationComplete, setAnimationComplete] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [animation, isAppReady]);

  const onImageLoaded = React.useMemo(
    () => async () => {
      try {
        await SplashScreen.hideAsync();
        // Load stuff
        await Promise.all([]);
      } catch (error) {
        // handle errors
      } finally {
        setAppReady(true);
      }
    },
    []
  );

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              // TODO: Only on dev there is a way to fix this with https://github.com/expo/expo-cli/issues/88
              backgroundColor: Constants.manifest.splash.backgroundColor,
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: Constants.manifest.splash.resizeMode || "contain",
              transform: [
                {
                  scale: animation,
                },
              ],
            }}
            source={image}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
};

interface AnimatedAppLoaderProps {
  children: ReactElement;
  image: string;
}

export const AnimatedAppLoader = ({
  children,
  image,
}: AnimatedAppLoaderProps) => {
  const [isSplashReady, setSplashReady] = React.useState(false);

  const startAsync = React.useMemo(
    () => () => Asset.fromModule(image).uri,
    [image]
  );

  const onFinish = React.useMemo(() => setSplashReady(true), []);

  const onError = () => {
    console.error("Error with AppLoading");
  };

  if (!isSplashReady) {
    return (
      <AppLoading
        autoHideSplash={false}
        startAsync={startAsync}
        onError={onError}
        onFinish={onFinish}
      />
    );
  }

  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
};
