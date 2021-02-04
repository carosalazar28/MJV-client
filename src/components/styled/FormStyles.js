import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

export const InputForm = styled.input`
  width: 250px;
  margin: 10px auto;
  border: 1px solid #0f31dd;
  border-radius: 5px;
  height: 24px;
  padding: 6px 15px;
  &:focus {
    border-color: rgba(15, 49, 221, 0.5);
    outline: none;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.0125), 0 0 8px rgba(34,139,230,0.5);
    transition: all .1s ease-in-out;
  };
`;

export const ButtonSend = styled.button`
  width: 150px;
  background-color: white;
  border: 1px solid blue;
  border-radius: 5px;
  padding: 10px 5px;
  cursor: pointer;
  margin: 15px auto;
  &:hover {
    border-color: rgba(15, 49, 221, 0.5);
    color: gray;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:focus {
    border-color: rgba(15, 49, 221, 0.5);
    outline: none;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.0125), 0 0 8px rgba(34,139,230,0.5);
    transition: all .1s ease-in-out;
  };
`;

export const Errors = styled.span`
  font-size: 14px;
  color: red;
`;