import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/Firebase";

const Login = () => {
  const { LoginUserEmail } = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginUserEmail(email, password);
  };

  return (
    <div className="flex flex-col justify-end items-center">
      <h2 className="font-bold">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button onClick={handleSubmit}>Sign In</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;

// const handleSubmit = (e) => {
//   const auth = getAuth(app);
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       navigate("/");
//       console.log("Signed in");
//       console.log(user);
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       setError(errorMessage);
//     });
// };
