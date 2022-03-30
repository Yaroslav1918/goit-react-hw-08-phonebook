import styled from "styled-components";
export const ContactList = styled.ul`
  margin-top: 15px;
`;
export const ListItem = styled.li`
  list-style: inside;
  align-items: baseline;
`;
export const Span = styled.span`
  font-size: 20px;
  margin-right: 10px;
  margin-left: 5px;
`;
export const ContactButton = styled.button`
  margin-left: 5px;
  background-color: #e7e7e7;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    background-color: #2d2da3;
    color: white;
  }
`;
