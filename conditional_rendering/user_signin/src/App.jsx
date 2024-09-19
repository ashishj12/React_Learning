import React, { useState } from "react";
import "./App.css";

const Signin = () => {
  const [signedin, setSignedin] = useState(false);

  const handleSignin = () => {
    setSignedin(true);
  };

  const handleSignout = () => {
    setSignedin(false);
  };
  return (
    <div>
      {signedin ? (
        <div>
          <button type="button" onClick={handleSignout}>
            Sign Out
          </button>
          <p>Welcome back</p>
        </div>
      ) : (
        <div>
          <button type="button" onClick={handleSignin}>
            Sign In
          </button>
          <p>Please Sign in</p>
        </div>
      )}
    </div>
  );
};

export default Signin;
