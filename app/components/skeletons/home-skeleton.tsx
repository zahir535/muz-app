import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const HomeSkeleton = () => {
  return (
    <View style={{ padding: 24 }}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            width={"50%"}
            height={30}
            style={{ marginBottom: 12 }}
          />
          <SkeletonPlaceholder.Item width={"auto"} height={200} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default HomeSkeleton;
