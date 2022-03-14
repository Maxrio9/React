import React from "react";

export const ContactPicker = (props) => {
  const contacts = props.contacts;
  const contact = props.contact;

  const handleChange = (e) => {
    props.setContact(e.target.value);
  };

  return (
    <select name='contact' value={contact} onChange={handleChange}>
        <option value=''>Select Contact</option>
        {contacts.map(contact => (
          <option key={contact.name} value={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>
  );
};
