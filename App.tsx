import { Slot } from "expo-router";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./src/services/store";

/**
 * App.tsx
 * Contains all the wrappers of package's provider
 * Currently installed wrapper:
 * QueryClientProvider, Redux provider
 *
 * @returns Slot of expo router component
 */
export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Slot />
        </QueryClientProvider>
      </Provider>
    </>
  );
}
