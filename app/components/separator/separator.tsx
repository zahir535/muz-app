import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export const Separator = () => {
  return (
    <View
      style={{
        marginVertical: 24,
        width: "100%",
        // backgroundColor: "lightgreen",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 12,
      }}
    >
      <View
        style={{
          height: 2,
          borderRadius: 8,
          backgroundColor: "black",
          // width: "auto",
          flex: 1,
        }}
      />
      <Ionicons
        name="book-sharp"
        size={18}
        color="#25292e"
        style={{ marginHorizontal: 12 }}
      />
      <View
        style={{
          height: 2,
          borderRadius: 8,
          backgroundColor: "black",
          // width: "auto",
          flex: 1,
        }}
      />
    </View>
  );
};
