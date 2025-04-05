import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextType = {
  token: string;
  userId: string;
  setToken: Function;
  setUserId: Function;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [authUser, setAuthUser] = useState(
    AsyncStorage.getItem("authToken") || null
  );
  return (
    <AuthContext.Provider value={{ token, userId, setToken, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};
