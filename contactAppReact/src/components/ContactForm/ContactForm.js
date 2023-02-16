import { useState } from "react";
import * as styles from "./contact-form.module.css";
import { MdOutlineAccountCircle } from "react-icons/md";

export function ContactForm({ contacts }) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState("");

  function Contact(name, sname, phone, address) {
    this.name = name.toLowerCase();
    this.sname = sname.toLowerCase();
    this.phone = phone;
    this.address = address;
  }

  //submit handler
  function submitHandler(event) {
    event.preventDefault();

    const name = event.target.first_name.value;
    const sname = event.target.second_name.value;
    const phone = event.target.phone.value;
    const address = event.target.address.value;

    const newContact = new Contact(name, sname, phone, address);
    contacts.push(newContact);
    console.log(contacts);
  }
  return (
    <form
      className={styles.contact_form}
      onSubmit={(event) => {
        submitHandler(event);
      }}
    >
      <div className={styles.input_group}>
        <MdOutlineAccountCircle className={styles.formIcons} />
        <input
          id="first_name"
          value={firstName}
          placeholder="first name"
          onChange={(event) => {
            event.preventDefault();
            setFirstName(event.target.value);
          }}
        ></input>
      </div>
      <div className={styles.input_group}>
        <MdOutlineAccountCircle className={styles.formIcons} />
        <input
          id="second_name"
          value={secondName}
          placeholder="second name"
          onChange={(event) => {
            event.preventDefault();
            setSecondName(event.target.value);
          }}
        ></input>
      </div>
      <div className={styles.input_group}>
        <MdOutlineAccountCircle className={styles.formIcons} />
        <input
          id="phone"
          value={phone}
          placeholder="+49 12345678"
          onChange={(event) => {
            event.preventDefault();
            setPhone(event.target.value);
          }}
        ></input>
      </div>
      <div className={styles.input_group}>
        <MdOutlineAccountCircle className={styles.formIcons} />
        <input
          id="address"
          value={address}
          placeholder="land way 1"
          onChange={(event) => {
            event.preventDefault();
            setAddress(event.target.value);
          }}
        ></input>
      </div>
      <button type="submit" className={styles.form_btn}>
        Create
      </button>
    </form>
  );
}
