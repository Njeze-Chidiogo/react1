import React, { useState } from "react";

import NameInput from "./name";

import EmailInput from "./email";

import PhoneInput from "./number";
import "../style/index.css";
const FormComponent = () => {
  //initializing state with empty string
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //updating state with vlue string
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //submitting the form
  const handleSubmit = () => {
    if (!name || !email || !phone) {
      alert("Please fill in all required fields");
      return;
    } else {
      alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
    }
  };

  //returning the form
  return (
    <div className="form-container">
      <h1>Fill out the form</h1>
      <form action="">
        <NameInput value={name} onChange={handleNameChange} />
        <EmailInput value={email} onChange={handleEmailChange} />
        <PhoneInput value={phone} onChange={handlePhoneChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
