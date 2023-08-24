import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const ContactFormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 auto;
  margin-bottom: 16px;
  padding: 10px 20px;
  width: 600px;
  border: 2px solid black;
  border-radius: 4px;
  list-style-type: none;
`;

export const ContactListLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 600;
`;

export const ContactListInput = styled(Field)`
  width: 500px;
  height: 32px;
  font-size: 16px;
  padding: 0 5px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: 1px solid black;
`;

export const AddContactBtn = styled.button`
  width: 100px;
  height: 32px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: blue;
    color: white;
    outline: none;
    border: 1px solid transparent;
  }
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-bottom: 8px;
`;
