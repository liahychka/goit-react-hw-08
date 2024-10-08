import Contact from "../Contact/Contact";
import React from 'react';
import css from "./ContactList.module.css"
import {useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilters } from "../../redux/filtersSlice";


const ContactList = () => {
  const tasks = useSelector(selectContacts);
  const searchStr = useSelector(selectFilters);

    const filteredContacts = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchStr.toLowerCase())
  );
  if (filteredContacts.length === 0) {
    return;
  }

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;