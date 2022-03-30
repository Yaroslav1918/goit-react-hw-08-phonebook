import {
  ContactButton,
  ListItem,
  Span,
} from "../ContactsList/ContactList.styled";
import { FcPhoneAndroid } from "react-icons/fc";

import s from "./ContactItem.module.css";
import { getLoading } from "../../redux/contacts/contacts-selectors";
import { useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from "react";
const ContactItem = ({ name, number, id, onDeleteTodo }) => {
  const [value, setValue] = useState(false);
  const loading = useSelector(getLoading);

  const onChangeBoolean = () => {
    setValue(true);
  };

  return (
    <ListItem key={id} className={s.listItem}>
      <Span> {name}</Span>
      <Span> {number}</Span>
      <FcPhoneAndroid />
      <ContactButton
        onClick={() => {
          onDeleteTodo(id);
          onChangeBoolean();
        }}
      >
        {loading && value ? <BeatLoader size={9} /> : "Delete"}
      </ContactButton>
    </ListItem>
  );
};

export default ContactItem;
