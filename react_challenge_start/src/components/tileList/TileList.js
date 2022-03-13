import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const contacts = props.contacts;
  const appointments = props.appointments;

  return (
    <div>
      {contacts ? contacts.map((contact) => {
        return <Tile contact={contact} />
      }) : appointments.map((appointment) => {
        return <Tile appointment={appointment} />
      })};
    </div>
  );
};
