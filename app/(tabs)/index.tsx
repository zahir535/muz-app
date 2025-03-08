import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { ClassSkeleton, HomeSkeleton } from "../components";

export default function Index() {
  const [isFetching, setIsFetching] = useState(true);

  if (isFetching) {
    return (
      <>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeSkeleton />
          <View style={{ marginBottom: 24 }} />
          <ClassSkeleton />
        </ScrollView>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen asd</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
