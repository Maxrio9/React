import React from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const appointments = props.appointments;
  const contacts = props.contacts;
  const addAppointment = props.addAppointment;	

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

    e.target.title.value = '';
    e.target.contact.value = '';
    e.target.date.value = '';
    e.target.time.value = '';

    if (title.length > 0 && contact.length > 0 && date.length > 0 && time.length > 0) {
      addAppointment(title, contact, date, time);
    }
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm handleSubmit={handleSubmit} contacts={contacts} title={title} contact={contact} date={date} time={time} setTitle={setTitle} setContact={setContact}  setDate={setDate} setTime={setTime}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={appointments} />
      </section>
    </div>
  );
};
