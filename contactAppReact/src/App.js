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
      phone: 12121212,
      address: "writers way 1",
    },
    {
      id: crypto.randomUUID(),
      name: "neil",
      sname: "armstrong",
      phone: 34343434,
      address: "space way 1",
    },
    {
      id: crypto.randomUUID(),
      name: "Edmund",
      sname: "Hillary",
      phone: 23232323,
      address: "mountian way 1",
    },
    {
      id: crypto.randomUUID(),
      name: "wright",
      sname: "brothers",
      phone: 39393939,
      address: "air way 1",
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

  function deleteContact(id) {
    //NEED TO IMPLEMENT THIS
    // ISSUE HOW DO I GET THE KEY OF THE PARENT ID ?
    console.log(id);
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
