import styled from 'styled-components';

export const ContactFormContainer = styled.form`
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
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const ContactListInput = styled.input`
  width: 500px;
  height: 32px;
  font-size: 16px;
  padding: 0 5px;
  margin-bottom: 16px;
`;

export const AddContactBtn = styled.button`
  width: 100px;
  height: 32px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 2px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: blue;
    color: white;
    outline: none;
    border: 1px solid transparent;
  }
`;
