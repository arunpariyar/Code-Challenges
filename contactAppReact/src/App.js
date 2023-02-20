import * as styles from "./app.module.css";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Shortcut } from "./components/Shortcut/Shortcut";
import { Contacts } from "./components/Contacts/Contacts";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { useState } from "react";

export function App() {
  //create new state for contacts
  const [contacts, setContacts] = useState([
    {
      id: crypto.randomUUID(),
      name: "john",
      sname: "doe",
      phone: 123456,
      address: "writers way",
    },
    {
      id: crypto.randomUUID(),
      name: "neil",
      sname: "Armstrong",
      phone: 3456432,
      address: "space way",
    },
  ]);
  //create  a lifted state for the shortcut the value of which will ensure we can toggle effectively
  const [contactVisible, setContactVisible] = useState(true);
  const [contactFromVisible, setContactFormVisible] = useState(false);

  function handleAddShortCut() {
    setContactFormVisible(true);
    setContactVisible(false);
  }

  function handleHomeShortcut() {
    setContactVisible(true);
    setContactFormVisible(false);
  }

  function handleNewContact(contact) {
    const nextContacts = [...contacts, contact];
    setContacts(nextContacts);
    //set to the contacts view
    handleHomeShortcut();
  }

  function deleteContact(event) {
    //NEED TO IMPLEMENT THIS
    // ISSUE HOW DO I GET THE KEY OF THE PARENT ID ?
    console.log(event);
  }

  //create a function that can then be passed down to the shortcut
  // t
  return (
    <div className={styles.container}>
      <Header></Header>
      <SearchBar></SearchBar>
      <Shortcut
        handleAddShortCut={handleAddShortCut}
        handleHomeShortcut={handleHomeShortcut}
      ></Shortcut>
      {contactVisible && (
        <Contacts contacts={contacts} deleteContact={deleteContact}></Contacts>
      )}
      {contactFromVisible && (
        <ContactForm
          contacts={contacts}
          handleNewContact={handleNewContact}
        ></ContactForm>
      )}
    </div>
  );
}
