import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface ClassCardProps {
  title: string;
  onPress?: () => void;
}

const ClassCard = ({ title, onPress }: ClassCardProps) => {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
        <Ionicons name="arrow-forward-circle-outline" size={24} color="white" />
      </TouchableOpacity>
    </>
  );
};

export default ClassCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#25292e",
    padding: 24,
    width: "100%",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
