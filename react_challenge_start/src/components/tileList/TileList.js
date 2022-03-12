import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const contacts = props.contacts;

  return (
    <div>
      {contacts.map((contact) => (
        <Tile contact={contact}/>
      ))}
    </div>
  );
};
