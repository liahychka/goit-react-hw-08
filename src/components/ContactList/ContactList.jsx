import Contact from "../Contact/Contact";
import { useEffect } from 'react';
import css from "./ContactList.module.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import ContactForm from "../ContactForm/ContactForm";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
// import { selectFilters } from "../../redux/filtersSlice";


const ContactList = () => {

  // const contacts = useSelector(selectContacts);
  const searchStr = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const IsLoadnig = useSelector(selectLoading);
  const IsError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts)
  }, [dispatch])

  return (
    <ul className={css.list}>
      {searchStr.map(({ id, name, number }) => {
        return (
          <div>
            <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            />
        <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {IsLoadnig && <h2>Loading...</h2>}
      {IsError && <h2>Error...</h2>}
          </div>


        );
      })}
    </ul>
  );
};

export default ContactList;

// function App() {

//   const IsLoadnig = useSelector(selectLoading);
//   const IsError = useSelector(selectError);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
  
//   return (
//     <div>
//   <h1>Phonebook</h1>
//   <ContactForm />
//       <SearchBox />
//       {IsLoadnig && <h2>Loading...</h2>}
//       {IsError && <h2>Error...</h2>}
//   <ContactList />
// </div>

//   )
// }

// export default App;