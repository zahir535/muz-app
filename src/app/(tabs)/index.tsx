import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import ClassSection from "../../components/sections/class-section";
import NewsSection from "../../components/sections/news-section";
import ClassSkeleton from "../../components/skeletons/class-skeleton";
import HomeSkeleton from "../../components/skeletons/home-skeleton";
import Ionicons from "@expo/vector-icons/Ionicons";
import Separator from "@/src/components/separator/separator";

export default function Index() {
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeSkeleton />
          <View style={{ marginBottom: 24 }} />
          <ClassSkeleton />
        </ScrollView>
      </>
    );
  }

  return (
    <>
      <FlatList
        data={[]}
        renderItem={() => {
          return <></>;
        }}
        ListHeaderComponent={
          <>
            <NewsSection />
            <Separator />
          </>
        }
        ListFooterComponent={<ClassSection />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#25292e",
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 24,
    // backgroundColor: "lightgreen",
  },
});
