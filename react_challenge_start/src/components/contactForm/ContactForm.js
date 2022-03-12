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
      <input type="text" name='name'></input>
      <label>Phone Number</label>
      <input type="text" name='phone' /*pattern={{value: '^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$', message: 'invalid phone number'}}*/></input>
      <label>Email</label>
      <input type="text" name='email'></input>
      <input type='submit' value='Add Contact'></input>
    </form>
  );
};
