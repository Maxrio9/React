import React from "react";

export const AppointmentsPage = () => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    setTitle(e.target.title.value);
    setContact(e.target.contact.value);
    setDate(e.target.date.value);
    setTime(e.target.time.value);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
