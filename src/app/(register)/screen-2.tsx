import { useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Screen2() {
  const router = useRouter();
  const handleNext = () => {
    router.push("/(register)/screen-3");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Screen 2</Text>

      <View style={{ height: 24 }} />
      <TouchableOpacity
        onPress={handleNext}
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
        <Text style={{ color: "white" }}>Next screen</Text>
      </TouchableOpacity>
    </View>
  );
}
