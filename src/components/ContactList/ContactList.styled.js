import styled from 'styled-components';

export const Container = styled.ul`
  margin: 0 auto;
  padding: 10px 20px;
  width: 600px;
  border: 2px solid black;
  border-radius: 4px;
  list-style-type: none;
`;

export const Contact = styled.li`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContactInfo = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const DeleteBtn = styled.button`
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
