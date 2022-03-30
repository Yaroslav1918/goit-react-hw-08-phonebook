import React, { useState } from "react";
import { Container } from "./Filter.styled";
import ContactsList from "../ContactsList/ContactsList";
import { TextField } from "@mui/material";
import s from "./Filter.module.css";
import { getAllContacts } from "../../redux/contacts/contacts-selectors";
import { useSelector } from "react-redux";

const Filter = () => {
  const [filter, setFilter] = useState("");
  const visibleFilter = useSelector(getAllContacts);

  const onChangeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };
  const getFilterList = () => {
    return (
      visibleFilter &&
      visibleFilter.filter((contact) =>
        contact?.name.toLowerCase().includes(filter)
      )
    );
  };
  const visibleItem = getFilterList();

  return (
    <>
      <Container>
        <TextField
          type="text"
          name="filter"
          value={filter}
          onChange={(e) => onChangeFilter(e)}
          id="outlined-basic"
          variant="outlined"
          label="find contacts by name "
          className={s.input}
        />
        <ContactsList contacts={visibleItem} />
      </Container>
    </>
  );
};

export default Filter;
