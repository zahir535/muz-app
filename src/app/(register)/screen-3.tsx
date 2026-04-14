import { useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Screen3() {
  const router = useRouter();

  const onCompleteFlow = () => {
    router.dismissTo("/(tabs)/profile");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Screen 3</Text>

      <View style={{ height: 24 }} />
      <TouchableOpacity
        onPress={onCompleteFlow}
        style={{
          width: "80%",
          paddingHorizontal: 24,
          paddingVertical: 12,
          borderRadius: 12,
          backgroundColor: "#1A1953",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Complete Flow</Text>
      </TouchableOpacity>
    </View>
  );
}
