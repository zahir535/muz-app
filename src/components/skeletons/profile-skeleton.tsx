import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const ProfileSkeleton = () => {
  return (
    <View style={{ padding: 24, paddingTop: 120 }}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item gap={24}>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            gap={12}
          >
            <SkeletonPlaceholder.Item
              width={50}
              height={50}
              borderRadius={50}
            />
            <SkeletonPlaceholder.Item
              width={"50%"}
              height={30}
              style={{ marginBottom: 12 }}
            />
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item width={"auto"} height={200} />

          <SkeletonPlaceholder.Item width={"auto"} height={50} marginTop={24} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default ProfileSkeleton;
