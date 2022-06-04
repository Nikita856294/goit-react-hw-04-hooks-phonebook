import styled from 'styled-components';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  width: 400px;
  padding-bottom: 15px;
`;
const FormLabel = styled.label`
  margin-top: 10px;
  display: block;
`;
const FormInput = styled.input`
  display: block;
  margin-top: 5px;
`;
const AddButton = styled.button`
  display: block;
  margin-top: 10px;
  padding: 15px;
  background-color: blue;
  outline: none;
  border: 0;
  border-radius: 4px;
  color: white;
`;
export { ContactForm, AddButton, FormLabel, FormInput };
