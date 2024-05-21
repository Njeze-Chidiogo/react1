import React from "react";
const PhoneInput = ({ value, onChange }) => {
  return (
    <input
      type="tel"
      placeholder="Phone No"
      value={value}
      onChange={onChange}
    />
  );
};
export default PhoneInput;
