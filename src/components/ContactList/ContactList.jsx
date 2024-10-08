import Contact from "../Contact/Contact";
import React from 'react';
import css from "./ContactList.module.css"
import {useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectFilters } from "../../redux/filtersSlice";


const ContactList = () => {
  const tasks = useSelector(selectContacts);
  const searchStr = useSelector(selectFilters);

  const filterData = tasks.filter(task => task.contacts.toLowerCase().trim().includes(searchStr.toLowerCase().trim()));


  return (
    <ul className={css.list}>
      {filterData.map(({ id, name, number }) => {
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