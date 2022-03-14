import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" name='title'></input>
      <label>Contact</label>
      <ContactPicker contacts={contacts} setContact={setContact} contact={contact}/>
      <label>Date</label>
      <input type="date" name='date' min={getTodayString()}></input>
      <label>Time</label>
      <input type="time" name='time'></input>
      <input type='submit' value='Add Appointment'></input>
    </form>
  );
};
