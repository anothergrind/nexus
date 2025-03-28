import React, { useState } from "react";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";

export default function Login() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName: string) => {
    setCurrentForm(formName === "SignIn" ? "login" : "SignIn");
  };

  return (
    <div className="Log">
      {currentForm === "login" ? (
        <SignIn onFormSwitch={toggleForm} display={false} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
      <div className="py-5"></div>
    </div>
  );
}
