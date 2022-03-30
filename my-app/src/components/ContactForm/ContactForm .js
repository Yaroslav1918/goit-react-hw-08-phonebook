import React, { useState } from "react";
import { ContactsForm } from "./ContactForm.styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import s from "../../views/RegisterView/RegisterView.module.css";
import { FiArrowUpRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import { getAllContacts } from "../../redux/contacts/contacts-selectors";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const visibleContacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onCheckNameValue = (contactName) => {
    const validateNumber = number.includes("+") ? parseInt(number) : number;

    if (name.trim() === "" || number.trim() === "") {
      return toast.error(" Please fill in all fields!");
    }
    if (!Number.isInteger(validateNumber)) {
      return toast.error("The number must start with * + * !");
    }
    if (
      visibleContacts.some(
        (contact) => contact.name.toLowerCase() === contactName.toLowerCase()
      )
    ) {
      toast(`${contactName} is already in contacts`);
      return;
    }
    dispatch(contactsOperations.addContact(name, number));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    onCheckNameValue(e.target.name.value);
    setName("");
    setNumber("");
  };

  return (
    <>
      <ContactsForm onSubmit={onSubmitForm}>
        <TextField
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className={s.input}
        />
        <TextField
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          id="outlined-basic"
          label="Number"
          variant="outlined"
          className={s.input}
        />

        <Button variant="outlined" type="submit" className={s.button}>
          add contact
          <FiArrowUpRight className={s.icon} />
        </Button>
      </ContactsForm>
    </>
  );
}
