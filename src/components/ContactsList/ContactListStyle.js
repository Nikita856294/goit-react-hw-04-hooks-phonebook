import styled from 'styled-components';

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const DeleteButton = styled.button`
  margin-left: 10px;
  padding: 15px;
  background-color: blue;
  border: none;
  border-radius: 4px;
  color: white;
`;
export { ContactsList, ListItem, DeleteButton };
