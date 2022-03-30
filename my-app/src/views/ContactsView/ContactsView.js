import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "../../components/ContactForm";
import { ContactList } from "../../components/ContactsList/ContactList.styled";
import Filter from "../../components/Filter/Filter";
import Title from "../../components/Title";

import contactsOperations from "../../redux/contacts/contacts-operations";
import { getAllContacts } from "../../redux/contacts/contacts-selectors";

const ContactsView = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(getAllContacts);

  useEffect(() => {
    if (visibleContacts.length >= 0) {
      dispatch(contactsOperations.fetchContacts());
    }
  }, [dispatch, visibleContacts.length]);
  return (
    <>
      <Title name={"Phonebook"} />
      <ContactForm />
      <ToastContainer />
      <Title name={"Contacts"} />
      {<Filter />}
      {<ContactList />}
    </>
  );
};

export default ContactsView;
