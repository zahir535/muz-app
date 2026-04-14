import { useRouter } from "expo-router";

export const useLoading = () => {
  const router = useRouter();

  const handleOpenLoading = () => {
    router.push({ pathname: "/modal-loading" });
  };

  const handleCloseLoading = () => {
    router.back();
  };

  // useEffect(() => {
  //   return () => {
  //     router.back();
  //   };
  // }, [router]);

  return { handleOpenLoading, handleCloseLoading };
};
