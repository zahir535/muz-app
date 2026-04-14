/* eslint-disable react/display-name */
import React from "react";
import {
  CameraCapturedPicture,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

interface CameraProps {
  onTakePicture: (result: CameraCapturedPicture | undefined) => Promise<void>;
}

export const Camera = forwardRef((props: CameraProps, ref) => {
  const { onTakePicture } = props;
  const cameraRef = useRef<CameraView | null>(null);

  const [image, setImage] = useState<CameraCapturedPicture | undefined>(
    undefined
  );
  const [permission, requestPermission] = useCameraPermissions();

  const takePicture = async () => {
    try {
      const result = await cameraRef.current?.takePictureAsync({
        exif: true,
        // additionalExif: [],
        // possibly if want to add location or other details associated to the pic
        // maybe company_id, user_id or transaction_id, etc
      });
      setImage(result);

      if (onTakePicture) {
        await onTakePicture(result);
      }
    } catch (error) {
      console.log("[CAMERA] Failed to take picture", error);
    }
  };

  useImperativeHandle(ref, () => ({
    requestPermission: requestPermission,
    permission: permission,
    takePicture: takePicture,
    image: image,
  }));

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            paddingBottom: 10,
          }}
        >
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <CameraView style={{ flex: 1 }} facing="back" ref={cameraRef} />
      <View
        style={{
          position: "absolute",
          bottom: 64,
          flexDirection: "row",
          backgroundColor: "transparent",
          width: "100%",
          paddingHorizontal: 64,
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
          }}
          onPress={takePicture}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Snap
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
