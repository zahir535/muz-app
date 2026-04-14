import { useRouter } from "expo-router";

export const useSuspend = () => {
  const router = useRouter();

  const handleOpenSuspended = () => {
    router.push({ pathname: "/modal-suspended" });
  };

  const handleCloseSuspended = () => {
    router.back();
  };

  return { handleOpenSuspended, handleCloseSuspended };
};
