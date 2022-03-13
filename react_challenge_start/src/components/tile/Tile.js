import React from "react";

export const Tile = (props) => {
  const contact = props.contact;
  const appointment = props.appointment;

  return contact ? (
    <div className="tile-container">
      <h2>Name: {contact.name}</h2>
      <h2>Phone Number: {contact.phone}</h2>
      <h2>Email: {contact.email}</h2>
    </div>
  ) : (
    <div className="tile-container">
      <p>Title: {appointment.title}</p>
      <p>Contact: {appointment.contact}</p>
      <p>Date: {appointment.date}</p>
      <p>Time: {appointment.time}</p>
    </div>
  );
};
