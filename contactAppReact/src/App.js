import * as styles from "./app.module.css";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Shortcut } from "./components/Shortcut/Shortcut";
import { Contacts } from "./components/Contacts/Contacts";
import { ContactForm } from "./components/ContactForm/ContactForm";

export function App() {
  const contacts = [
    {
      name: "john",
      sname: "doe",
      phone: 123456,
      address: "writers way",
    },
    {
      name: "neil",
      sname: "Armstrong",
      phone: 3456432,
      address: "space way",
    },
    {
      name: "jack",
      sname: "jones",
      phone: 34353543,
      address: "fashion way",
    },
    {
      name: "ringo",
      sname: "star",
      phone: 898989,
      address: "drums way",
    },
  ];
  return (
    <div className={styles.container}>
      <Header></Header>
      <SearchBar></SearchBar>
      <Shortcut></Shortcut>
      {/* <Contacts contacts={contacts}></Contacts> */}
      <ContactForm contacts={contacts}></ContactForm>
    </div>
  );
}
