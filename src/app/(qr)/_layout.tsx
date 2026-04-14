import React from "react";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Scan" }} />
      <Stack.Screen name="confirmation" options={{ headerShown: false }} />
    </Stack>
  );
}
