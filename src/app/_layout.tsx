import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { Provider } from "react-redux";
import store from "../services/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import outputs from "../../amplify_outputs.json";

Amplify.configure(outputs);

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
      <Authenticator.Provider>
        <Authenticator>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <StatusBar style="light" />
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(qr)" options={{ headerShown: false }} />
                <Stack.Screen
                  name="(register)"
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="class-details"
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="+not-found"
                  options={{ headerShown: false }}
                />
              </Stack>
            </QueryClientProvider>
          </Provider>
        </Authenticator>
      </Authenticator.Provider>
    </>
  );
}
