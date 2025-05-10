import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  SectionList,
  TouchableOpacity,
} from "react-native";
import PagerView from "react-native-pager-view";

const NewsSection = () => {
  const newsDummyData = [
    { title: "Gotong Royong Perdana", date: 1741500887000 },
    { title: "Cuti Umum", date: 1709964887000 },
    { title: "Cuti Umum 2", date: 1709964887000 },
    { title: "Cuti Umum 3", date: 1709964887000 },
  ];

  // ? info - attempt to use <PagerView /> failed. ViewManagerResolver returned null ...

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Announcements Center:</Text>

      <FlatList
        data={newsDummyData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              height: 200,
              width: 300,
              backgroundColor: "#25292e",
              borderRadius: 8,
            }}
          />
        )}
      />
    </View>
  );
};

export default NewsSection;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#25292e",
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 24,
    // backgroundColor: "lightgrey",
    // flexDirection: "row",
    // gap: 12,
    // padding: 24,
  },
  text: {
    // color: "#fff",
    marginBottom: 12,
    fontSize: 24,
    fontWeight: "700",
    padding: 24,
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});
