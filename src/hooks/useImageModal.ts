import { useRouter } from "expo-router";

export const useImageModal = () => {
  const router = useRouter();

  const handleOpenImageModal = ({ imageUri }: { imageUri: string }) => {
    router.push({
      pathname: "/modal-image",
      params: { imageUri },
    });
  };

  const handleCloseImageModal = () => {
    router.back();
  };

  return { handleOpenImageModal, handleCloseImageModal };
};
