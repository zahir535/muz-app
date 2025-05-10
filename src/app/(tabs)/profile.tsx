import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ProfileSkeleton from "../components/skeletons/profile-skeleton";

export default function ProfileScreen() {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    // todo - use lazy loading
    // tanstack query
    setTimeout(() => {
      setIsFetching(false);
    }, 2000);
  }, []);

  if (isFetching) {
    return (
      <>
        <ProfileSkeleton />
      </>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile screen</Text>
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
