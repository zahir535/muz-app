import React from "react";
import { Stack } from "expo-router";

export default function RegisterLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Screen 1" }} />
      <Stack.Screen name="screen-2" options={{ title: "Screen 2" }} />
      <Stack.Screen name="screen-3" options={{ title: "Screen 3" }} />
    </Stack>
  );
}
