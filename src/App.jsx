// import { useDispatch, useSelector } from "react-redux"
// import ContactForm from "./components/ContactForm/ContactForm"
// import ContactList from "./components/ContactList/ContactList"
// import SearchBox from "./components/SearchBox/SearchBox"
// import { useEffect } from "react";
// import { fetchContacts } from "./redux/contactsOps";
// import { selectError, selectLoading } from "./redux/contacts/contactsSlice";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App

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




