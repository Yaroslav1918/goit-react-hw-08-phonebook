import React from "react";
import { ContactList } from "./ContactList.styled";
import ContactItem from "../ContactItem";
import { useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";

const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();

  const onDeleteTodo = (id) => {
    dispatch(contactsOperations.deleteContact(id));
  };

  return (
    <ContactList>
      {contacts &&
        contacts.map(({ id, number, name }) => (
          <ContactItem
            key={id}
            id={id}
            number={number}
            name={name}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      {contacts.length === 0 && (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </ContactList>
  );
};

export default ContactsList;
