import { signOut } from "firebase/auth";
import React from "react";

export default function Navbar() {
  const user = useUserContext();
  const currentUser = user.currentUser;

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Navbar</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
