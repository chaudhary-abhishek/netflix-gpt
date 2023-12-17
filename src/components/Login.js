import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signUp, setSignUp] = useState(false);

  const toggleSignIn = () => {
    setSignUp(!signUp);
  };
  return (
    <div className="w-full absolute">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
     
        <form className="relative w-4/12 bg-black p-8 mx-auto my-24 rounded-lg bg-opacity-80 text-white">
          <h1 className="text-3xl w-3/4 mx-auto my-4 font-semibold">
            {signUp ? "Sign Up" : "Sign In"}
          </h1>
          {
           signUp && <input
            type="text"
            placeholder="Full Name"
            className="block p-4 w-3/4 mx-auto my-4 bg-gray-700 rounded-lg"
          />
          }
          <input
            type="text"
            placeholder="Email or phone number"
            className="block p-4 w-3/4 mx-auto my-4 bg-gray-700 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="block p-4 w-3/4 mx-auto my-4 bg-gray-700 rounded-lg"
          />
          <button className="block p-4 w-3/4 mx-auto my-8 bg-red-600 rounded-lg">
            {signUp ? "SignUp" : "Login"}
          </button>
          <p
            className="w-3/4 mx-auto my-4 cursor-pointer"
            onClick={toggleSignIn}
          >
            {signUp ?"Already a User? LogIn now" : "New to Netflix?SignUp now."}
          </p>
        </form>
   
    </div>
  );
};

export default Login;
