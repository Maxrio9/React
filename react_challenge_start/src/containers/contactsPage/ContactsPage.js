import React from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const contacts = props.contacts;
  const addContact = props.addContact;

  // const [name, setName] = React.useState("");
  // const [phone, setPhone] = React.useState("");
  // const [email, setEmail] = React.useState("");

  const [contactInfo, setContactInfo] = React.useState({
    name: "",
    number: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    setContactInfo({
      name: e.target.name.value,
      number: e.target.phone.value,
      email: e.target.email.value
    });
    e.target.name.value = '';
    e.target.phone.value = '';
    e.target.email.value = '';
    if (contactInfo.name.length > 0 && !contacts.some((contact) => contact.name === contactInfo.name)) {
      addContact(contactInfo.name, contactInfo.number, contactInfo.email);
      alert('Contact Added');
      setContactInfo({
        name: "",
        number: "",
        email: ""
      });
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm handleSubmit={handleSubmit} contactInfo={contactInfo} setContactInfo={setContactInfo}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
