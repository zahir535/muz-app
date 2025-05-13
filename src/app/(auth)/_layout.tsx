import React from "react";
import { Stack } from "expo-router";

/**
 * Stack screens of auth flows
 *
 * @returns Auth Stack
 */
export default function AuthLayout() {
  const commonScreenOptions = { headerShown: false };

  return (
    <Stack>
      <Stack.Screen name="index" options={commonScreenOptions} />
    </Stack>
  );
}
