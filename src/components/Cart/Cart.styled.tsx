import styled from "@emotion/styled";
import { Button, List, Modal } from "@mui/material";
import { Box } from "@mui/system";

export const StyledList = styled(List)`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;

export const Total = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const ButtonWrapper = styled(Box)`
  text-align: right;
  color: #8a2b06;
`;

export const ClosingButton = styled(Button)`
  color: #8a2b06;
  background-color: transparent;
  border-radius: 25px;
  padding: 0.5rem 2rem;
  border: 1px solid #8a2b06;

  :hover {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }

  :active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;

export const OrderButton = styled(Button)`
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;
  color: #fff;
  background-color: #8a2b06;

  :hover {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }

  :active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;
