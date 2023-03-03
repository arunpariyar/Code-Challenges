import React from "react";
import * as styles from "./contacts.module.css";
import { MdOutlineDeleteForever } from "react-icons/md";

export function Contacts({ deleteContact, contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className={`${styles.contactDetails} ${styles.contact}`}
        >
          <div>
            <p>{`${contact.name[0].toUpperCase()}${contact.name.substring(
              1
            )} ${contact.sname[0].toUpperCase()}${contact.sname.substring(
              1
            )}`}</p>
            <p
              className={styles.contactPhoneAddress}
            >{`+49 ${contact.phone} | ${contact.address}`}</p>
          </div>
          <MdOutlineDeleteForever
            className={styles.deleteIcon}
            onClick={(event) => deleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
}
