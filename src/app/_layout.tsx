import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  // todo - styling for header of stack screen
  // todo - change navigation header title of class-details screen to class name. access from global state management

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="class-details" options={{ title: "Class 2025" }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
