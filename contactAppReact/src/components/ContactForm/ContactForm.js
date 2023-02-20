import { useState } from "react";
import * as styles from "./contact-form.module.css";
import { MdOutlineAccountCircle } from "react-icons/md";

export function ContactForm({ handleNewContact, contacts }) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //submit handler
  function handleAddContact(event) {
    event.preventDefault();

    //getting all the input details
    const name = event.target.first_name.value.toLowerCase();
    const sname = event.target.second_name.value.toLowerCase();
    const phone = parseInt(event.target.phone.value);
    const address = event.target.address.value.toLowerCase();
    const id = crypto.randomUUID();

    if (
      name !== "" &&
      (sname !== "") & Number.isInteger(phone) &&
      address !== ""
    ) {
      handleNewContact({ id, name, sname, phone, address });
    } else {
      window.alert("Please enter all details correctly");
    }
  }
  return (
    <form
      className={styles.contact_form}
      onSubmit={(event) => {
        handleAddContact(event);
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
