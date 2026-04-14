import React from "react";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function ConfirmationScreen() {
  const router = useRouter();

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        padding: 24,
        backgroundColor: "white",
      }}
    >
      <View />
      <View style={{ flex: 1 }} />

      <Text style={{ fontSize: 24 }}>Payment Confirmation:</Text>
      <View style={{ height: 24 }} />
      <Text>Payment to: XX Merchant</Text>
      <Text>Amount: RM 24</Text>
      <Text>Date: 12 Jan 2026</Text>
      <Text>Time: 01:20 PM</Text>

      <View style={{ flex: 1 }} />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          // backgroundColor: "green",
        }}
      >
        <Pressable
          onPress={() => router.dismissTo("/(dashboard)")}
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
            flex: 1,
            backgroundColor: "red",
            paddingVertical: 16,
          }}
        >
          <Text style={{ color: "white" }}>Cancel</Text>
        </Pressable>

        <View style={{ width: 24 }} />

        <Pressable
          onPress={() => router.dismissTo("/(dashboard)")}
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
            flex: 1,
            backgroundColor: "#FF7800",
            paddingVertical: 16,
          }}
        >
          <Text style={{ color: "white" }}>Confirm</Text>
        </Pressable>
      </View>
      <View style={{ height: 48 }} />
    </ScrollView>
  );
}
