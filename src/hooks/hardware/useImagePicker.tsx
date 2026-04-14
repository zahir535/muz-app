import { FontAwesome } from "@expo/vector-icons";
import { Image, ImageStyle } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import React, { useCallback, useState } from "react";
import { Alert, Pressable } from "react-native";

interface ImageHolderProps {
  customStyle?: ImageStyle | undefined;
  viewImage?: (imageUri: string) => void;
}

interface useImagePickerProps {
  getBase64?: boolean;
}

const MAX_BASE64_SIZE = 3.5 * 1024 * 1024; // 3.5MB in bytes

export const useImagePicker = ({ getBase64 }: useImagePickerProps) => {
  const [image, setImage] = useState<string | null>(null);
  const [imageMetadata, setImageMetadata] = useState<
    ImagePicker.ImagePickerAsset | undefined
  >(undefined);
  const [quality, setQuality] = useState<number>(0.5);

  const pickImage = useCallback(async () => {
    // No permissions request is necessary for launching the image library.
    // Manually request permissions for videos on iOS when `allowsEditing` is set to `false`
    // and `videoExportPreset` is `'Passthrough'` (the default), ideally before launching the picker
    // so the app users aren't surprised by a system dialog after picking a video.
    // See "Invoke permissions for videos" sub section for more details.
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the media library is required.",
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: quality,
      exif: true,
      base64: getBase64,
    });

    // console.log(result);

    if (!result.canceled) {
      const asset = result.assets[0];
      if (getBase64 && asset.base64 && asset.base64.length > MAX_BASE64_SIZE) {
        setQuality(0.7);
        Alert.alert(
          "Image too large",
          "The selected image exceeds the 3.5MB size limit. Please choose a smaller image.",
        );
        return;
      }
      setImage(asset.uri);
      setImageMetadata(asset);
    }
  }, [getBase64, quality]);

  const takePicture = useCallback(async () => {
    const permissionResult = await ImagePicker.getCameraPermissionsAsync();

    if (!permissionResult.granted) {
      const permissionResponse = await ImagePicker.requestCameraPermissionsAsync();
      if (!permissionResponse.granted) {
        Alert.alert(
          "Permission required",
          "Permission to access camera to take a picture.",
        );
        return;
      }
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: quality,
      exif: true,
      base64: getBase64,
    });

    if (!result.canceled) {
      const asset = result.assets[0];
      if (getBase64 && asset.base64 && asset.base64.length > MAX_BASE64_SIZE) {
        setQuality(0.3);
        Alert.alert(
          "Image too large",
          "The captured image exceeds the 3.5MB size limit. Please try again with a lower resolution.",
        );
        return;
      }
      setImage(asset.uri);
      setImageMetadata(asset);
    }
  }, [getBase64, quality]);

  const requestImagePickerPermission = async () => {
    const permissionResult = await ImagePicker.getCameraPermissionsAsync();

    if (!permissionResult.granted) {
      const permissionResponse = await ImagePicker.requestCameraPermissionsAsync();
      if (!permissionResponse.granted) {
        Alert.alert(
          "Permission required",
          "Permission to access camera to take a picture.",
        );
        return;
      }
    }
  };

  const ImageHolder = useCallback(
    ({ customStyle, viewImage }: ImageHolderProps) => {
      const blurhash =
        "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

      const showImage = image !== null && viewImage !== undefined;

      const handleShowImage = () => {
        if (showImage) {
          viewImage(image);
        }
      };

      return (
        <Pressable onPress={showImage ? handleShowImage : takePicture}>
          {image && (
            <Pressable
              onPress={() => setImage(null)}
              style={{
                position: "absolute",
                right: 8,
                top: 8,
                zIndex: 10,
              }}
            >
              <FontAwesome name="close" size={28} color="white" />
            </Pressable>
          )}
          <Image
            style={
              customStyle ?? {
                minHeight: 160,
                borderRadius: 8,
              }
            }
            source={image}
            // placeholder={{ uri: dummyUri }}
            placeholder={{ blurhash }}
            contentFit="cover"
            placeholderContentFit="cover"
            transition={1000}
          />
        </Pressable>
      );
    },
    [image, takePicture],
  );

  return {
    takePicture,
    pickImage,
    image,
    imageMetadata,
    requestImagePickerPermission,
    ImageHolder,
  };
};
