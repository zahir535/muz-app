import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import ProfileSkeleton from "../../components/skeletons/profile-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "@/src/services/store/slices/userSlice";
import { RootState } from "@/src/services/store/store";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  const name = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch();
  const { signOut } = useAuthenticator();

  const [isFetching, setIsFetching] = useState(true);

  const handleUpdateName = () => {
    dispatch(updateUserName("New name"));
  };

  const handleRunMockProcess = () => {
    router.push("/(register)");
  };

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
      <Text style={styles.text}>Profile screen: name</Text>
      <View style={{ height: 24 }} />
      <Pressable onPress={handleUpdateName}>
        <Text style={styles.text}>Update name: {name}</Text>
      </Pressable>

      <View style={{ height: 48 }} />
      <Pressable onPress={handleRunMockProcess}>
        <Text style={styles.text}>Mock process</Text>
      </Pressable>

      <View style={{ height: 48 }} />
      <Pressable onPress={signOut}>
        <Text style={styles.text}>Sign Out</Text>
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
