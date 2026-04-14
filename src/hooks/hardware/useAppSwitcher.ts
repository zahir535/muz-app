import { useEffect, useState } from "react";
import { AppState, AppStateStatus, Platform } from "react-native";

export const useAppSwitcher = () => {
  const [isBackground, setIsBackground] = useState(false);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      setIsBackground(
        nextAppState === "background" || nextAppState === "inactive",
      );
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  // requirement on IOS. hide the screen when app is in multitasking view
  return { isBackground: Platform.OS === "ios" ? isBackground : false };
};
