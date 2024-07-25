import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, React } from "react";
import { app } from "../../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="h-dvh flex flex-col justify-center items-center align-middle dark:bg-slate-900">
      <div className="flex flex-col gap-5 shadow-lg p-10 rounded-2xl bg-slate-800">
        <h1 className="text-2xl text-white font-medium text-center">Register</h1>
        <input
          className="border border-gray-300 rounded-md p-2 w-60"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border border-gray-300 rounded-md p-2 w-60"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-purple-500 hover:bg-purple-700 rounded-md mx-auto p-2 text-white"
          onClick={handleRegister}
        >
          Register
        </button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
