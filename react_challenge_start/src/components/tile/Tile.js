import React from "react";

export const Tile = (props) => {
  const contact = props.contact;
  const appointment = props.appointment;

  return contact ? (
    <li className="tile-container">
      <p className='tile-title'>Name: {contact.name}</p>
      <p className='tile'>Phone Number: {contact.phone}</p>
      <p className='tile'>Email: {contact.email}</p>
    </li>
  ) : (
    <li className="tile-container">
      <p className='tile-title'>Title: {appointment.title}</p>
      <p className='tile'>Contact: {appointment.contact}</p>
      <p className='tile'>Date: {appointment.date}</p>
      <p className='tile'>Time: {appointment.time}</p>
    </li>
  );
};
