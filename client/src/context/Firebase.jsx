import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { createContext, useContext } from "react";
import { app } from "../firebase";
import { Navigate } from "react-router-dom";

export const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const signUpUserEmail = (email, password) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("User signed up successfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const LoginUserEmail = (email, password) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User signed in successfully");
        window.location.href = "/";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  return (
    <FirebaseContext.Provider value={{ signUpUserEmail, LoginUserEmail }}>
      {children}
    </FirebaseContext.Provider>
  );
};
