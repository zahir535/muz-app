import { Camera } from "@/src/components/ui-native";
import { BarcodeScanningResult, CameraCapturedPicture } from "expo-camera";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import { ScrollView } from "react-native";

export default function CameraScreen() {
  const router = useRouter();
  const cameraRef = useRef(null);

  const handleOnTakePicture = async (
    result: CameraCapturedPicture | undefined,
  ) => {
    try {
      console.log(">>> result", JSON.stringify(result));

      router.navigate("/(qr)/confirmation");
    } catch (error) {
      console.log("[CAMERA] Failed to process image", error);
    }
  };

  const handleOnBarCodeScanned = async (
    scanningResult: BarcodeScanningResult | undefined,
  ) => {
    try {
      console.log(">>> scanningResult", JSON.stringify(scanningResult));
    } catch (error) {
      console.log("[CAMERA] Failed to process QR scan result", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Camera ref={cameraRef} onTakePicture={handleOnTakePicture} />
      {/* <ScanCamera ref={cameraRef} onBarcodeScanned={handleOnBarCodeScanned} /> */}
    </ScrollView>
  );
}
