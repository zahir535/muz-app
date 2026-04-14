import { useFocusEffect } from "expo-router";
import React from "react";
import { BackHandler } from "react-native";

export const useBackButtonDisabled = () => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Return true to prevent the default back button behavior
        console.log("Back button pressed, but navigation prevented");
        // Optionally, you can show an alert or perform some other action
        return true;
      };

      // Add the event listener when the screen is focused
      const listener = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      // Remove the event listener when the screen is unfocused
      return () => listener.remove();
    }, [])
  );
};
