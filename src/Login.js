import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "./utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //validate form
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black rounded-lg my-36 -12 bg-opacity-70"
      >
        <h1 className="py-4 text-3xl font-bold ">
          {isSignInForm ? "Sign-In" : "Sign-Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="w-full p-4 my-2 bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email-address"
          className="w-full p-4 my-2 bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-4 my-2 bg-gray-800"
        />
        <p className="text-red-600 ">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="w-full p-4 my-6 bg-red-700 rounded-lg"
        >
          {isSignInForm ? "Sign-In" : "Sign-Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Signup now!!"
            : "Already user? Sign-In now!!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
