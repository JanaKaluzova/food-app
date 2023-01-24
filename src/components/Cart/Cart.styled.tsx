import styled from "@emotion/styled";
import { Button, List, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const StyledBoxOfList = styled(Box)`
  margin-bottom: 2rem;
  overflow: auto;
`;

export const StyledList = styled(List)`
  list-style: none;

  margin: 0;

  padding: 0;
  max-height: 20rem;
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

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  // height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
  display: "flex",
  flexDirection: "column" as "column",
  justifyContent: "space-around" as "space-around",
};

export const TotalAmount = styled(Typography)`
  font-weight: 600;
`;
