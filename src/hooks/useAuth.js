import useFirebase from "./useFirebase";

const useAuth = () => {
  const {
    user,
    isLoading,
    setIsLoading,
    handleRegister,
    handleEmailLogin,
    signInWithGoogle,
    logOut,
  } = useFirebase();

  return {
    user,
    isLoading,
    setIsLoading,
    handleRegister,
    handleEmailLogin,
    signInWithGoogle,
    logOut,
  };
};

export default useAuth;
