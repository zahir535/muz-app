/* eslint-disable react/display-name */
import React from "react";
import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { useRouter } from "expo-router";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { Button, Text, View } from "react-native";

interface ScanCameraProps {
  onBarcodeScanned: (scanningResult: BarcodeScanningResult) => Promise<void>;
}

export const ScanCamera = forwardRef((props: ScanCameraProps, ref) => {
  const { onBarcodeScanned } = props;
  const router = useRouter();
  const cameraRef = useRef<CameraView | null>(null);

  const [permission, requestPermission] = useCameraPermissions();

  const handleOnBarCodeScanned = async (
    scanningResult: BarcodeScanningResult,
  ) => {
    try {
      if (onBarcodeScanned) {
        await onBarcodeScanned(scanningResult);
      }

      router.back();
    } catch (error) {
      console.log("[SCAN CAMERA] Failed to process QR", error);
    }
  };

  useImperativeHandle(ref, () => ({
    requestPermission: requestPermission,
    permission: permission,
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
      <CameraView
        style={{ flex: 1 }}
        facing="back"
        ref={cameraRef}
        onBarcodeScanned={handleOnBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
      />
    </View>
  );
});
