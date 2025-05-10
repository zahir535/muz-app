import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";

interface ClassCardProps {
  title: string;
  onPress?: () => {};
}

const NewsCard = ({ title, onPress }: ClassCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#25292e",
    margin: 24,
    width: "100%",
    height: 48,
    borderRadius: 12,
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
