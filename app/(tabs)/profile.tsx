import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ProfileSkeleton } from "../components";

export default function ProfileScreen() {
  const [isFetching, setIsFetching] = useState(true);

  if (isFetching) {
    return (
      <>
        <ProfileSkeleton />
      </>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
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
