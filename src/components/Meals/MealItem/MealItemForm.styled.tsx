import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";

export const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const StyledButton = styled(Button)`
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;
  margin-left: 1rem;
  margin-bottom: 1rem;

  :hover {
    background-color: #641e03;
    border-color: #641e03;
  }
  :active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;

export const InputField = styled(TextField)`
  width: 3.5rem;
  border-radius: 5px;

  padding-left: 0.5rem;
  /* input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  } */
`;
