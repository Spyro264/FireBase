import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
} from "firebase/auth";
import { auth } from "./firebase";

console.log({ auth: auth.currentUser });

// create user with email pas pass
export const createUserWithEmail = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// sign In user with email pas pass
export const signInWithEmail = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// login using google
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};

//signOut.
export const SignOut = () => {
  return auth.signOut();
};

//passsword Reset/
export const ResetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};

//password Change
export const ChangePassword = (password) => {
  return updatePassword(auth.currentUser, password);
};

//email verification.
export const EmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
