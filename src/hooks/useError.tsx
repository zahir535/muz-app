import { Spacer } from "@/components/ui";
import React, { Fragment, useState } from "react";
import { Text, View } from "react-native";

export const useError = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const ErrorBanner = () => {
    if (errorMessage === null) return null;

    return (
      <Fragment>
        {errorMessage !== null && errorMessage !== "" && (
          <View>
            <Spacer size={12} />
            <Text style={{ color: "red" }}>{errorMessage}</Text>
          </View>
        )}
      </Fragment>
    );
  };

  return { errorMessage, setErrorMessage, ErrorBanner };
};
