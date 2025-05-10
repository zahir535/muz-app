import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import ClassCard from "../cards/class-card";
import { useNavigation, useRouter } from "expo-router";

const ClassSection = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const classDummyData = [
    { id: "id-1", classTitle: "Darjah 5 - Math", joinedDate: 1741500887000 }, // 2025
    {
      id: "id-2",
      classTitle: "Darjah 4 - Bahasa Melayu",
      joinedDate: 1709964887000,
    }, // 2024
    { id: "id-3", classTitle: "Darjah 4 - Math", joinedDate: 1733724887000 }, // 2024
    { id: "id-4", classTitle: "Darjah 5 - Math", joinedDate: 1741500887000 }, // 2025
    {
      id: "id-5",
      classTitle: "Darjah 4 - Bahasa Melayu",
      joinedDate: 1709964887000,
    }, // 2024
    { id: "id-6", classTitle: "Darjah 4 - Math", joinedDate: 1733724887000 }, // 2024
    { id: "id-7", classTitle: "Darjah 5 - Math", joinedDate: 1741500887000 }, // 2025
    {
      id: "id-8",
      classTitle: "Darjah 4 - Bahasa Melayu",
      joinedDate: 1709964887000,
    }, // 2024
    { id: "id-9", classTitle: "Darjah 4 - Math", joinedDate: 1733724887000 }, // 2024
    { id: "id-0", classTitle: "Darjah 5 - Math", joinedDate: 1741500887000 }, // 2025
    {
      id: "id-10",
      classTitle: "Darjah 4 - Bahasa Melayu",
      joinedDate: 1709964887000,
    }, // 2024
    { id: "id-11", classTitle: "Darjah 4 - Math", joinedDate: 1733724887000 }, // 2024
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Classes:</Text>

      <FlatList
        data={classDummyData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <ClassCard
            title={item.classTitle}
            onPress={() => router.navigate("/class-details")}
          />
        )}
      />
    </View>
  );
};

export default ClassSection;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#25292e",
    // alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 24,
    paddingBottom: 24,
    // backgroundColor: "lightgreen",
    // backgroundColor: "lightblue",
  },
  text: {
    // color: "#fff",
    marginBottom: 12,
    fontSize: 24,
    fontWeight: "700",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
