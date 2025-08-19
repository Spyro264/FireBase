import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebaseConfig/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const un_subscribe = onAuthStateChanged(auth, initializeUSer);
    return un_subscribe;
  }, []);

  //initialize user function
  async function initializeUSer(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
