import { useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";

const useNetworkStatus = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handlePress = () => {
    if (isConnected) {
      navigation.navigate("Login");
    } else {
      console.log("sem conexão");
      alert("Você está offline, verifique sua conexão com a internet.");
    }
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    // Limpar na desmontagem
    return () => {
      unsubscribe();
    };
  }, []);

  return isConnected;
};

export default useNetworkStatus;
