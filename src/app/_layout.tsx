import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { Provider } from "react-redux";
import store from "../services/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * Contains all screens & stacks of the app
 *
 * @returns Navigation Stack UI
 */
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="class-details" options={{ title: "Class 2025" }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

/**
 * Contains all the wrappers of package's provider
 * Currently installed wrapper:
 * QueryClientProvider, Redux provider
 *
 * @returns
 */
export default function RootLayout() {
  const queryClient = new QueryClient();
  // todo - styling for header of stack screen
  // todo - change navigation header title of class-details screen to class name. access from global state management

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <StatusBar style="light" />
          <Layout />
        </QueryClientProvider>
      </Provider>
    </>
  );
}
