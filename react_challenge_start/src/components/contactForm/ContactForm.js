import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Full Name</label>
      <input type="text"></input>
      <label>Phone Number</label>
      <input type="text"></input>
      <label>Email</label>
      <input type="text"></input>
      <input type='submit' value='Add Contact'></input>
    </form>
  );
};
