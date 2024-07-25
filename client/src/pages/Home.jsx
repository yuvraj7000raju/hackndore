import React from "react";
import { useUserContext } from "../context/userContext";
import Navbar from "../Components/Navbar";

export default function Home() {
  const user = useUserContext();
  const currentUser = user.currentUser;
  console.log(user, currentUser);

  if (!currentUser) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1>Home</h1>
        <p>Welcome to the home page</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1>Home</h1>
        <p>Welcome to the home page , {currentUser.email}</p>
      </div>
    </>
  );
}
