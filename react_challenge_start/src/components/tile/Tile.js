import React from "react";

export const Tile = (props) => {
  const contact = props.contact;
  return (
    <div className="tile-container">
      <h2>Name: {contact.name}</h2>
      <h2>Phone Number: {contact.phone}</h2>
      <h2>Email: {contact.email}</h2>
    </div>
  );
};
