import styled from "@emotion/styled";
import { Box, Button, List, Typography } from "@mui/material";

export const CartItemList = styled(List)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #1d3557;
  padding: 1rem 0;
  margin: 1rem 0;
`;

export const CartItemName = styled(Typography)`
  margin: 0 0 0.5rem 0;
  color: #363636;
  font-weight: 600;
`;

export const Summary = styled(Box)`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
`;

export const CartItemPrice = styled(Typography)`
  font-weight: bold;
  color: #8a2b06;
`;

export const CartItemAmount = styled(Typography)`
  font-weight: bold;
  border: 1px solid #ccc;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  color: #363636;
`;

export const Actions = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const CartItemButton = styled(Button)`
  font: inherit;
  font-weight: bold;
  font-size: 1.25rem;
  color: #457b9d;
  border: 1px solid #457b9d;
  width: 3rem;
  text-align: center;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  margin-left: 1rem;
  margin: 0.25rem;

  :hover,
  :active {
    background-color: #1d3557;
    color: white;
  }
`;
