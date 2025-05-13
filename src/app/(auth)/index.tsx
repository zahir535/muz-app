import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Auth Stack</Text>
      <Pressable onPress={() => router.replace("/(tabs)")}>
        <Text style={styles.text}>Go To Dashboard</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
