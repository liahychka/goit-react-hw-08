import { useDispatch, useSelector } from "react-redux"
import ContactForm from "./components/ContactForm/ContactForm"
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox"
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/contactsSlice";

function App() {

  const IsLoadnig = useSelector(selectLoading);
  const IsError = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm />
      <SearchBox />
      {IsLoadnig && <h2>Loading...</h2>}
      {IsError && <h2>Error...</h2>}
  <ContactList />
</div>

  )
}

export default App;

