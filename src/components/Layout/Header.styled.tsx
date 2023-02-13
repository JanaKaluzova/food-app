import styled from "@emotion/styled";

import {
  AppBar,
  Badge,
  BadgeProps,
  Box,
  Button,
  Typography,
} from "@mui/material";

export const StyledHeader = styled(AppBar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #1d3557;
  color: #f1faee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

export const ImageBox = styled(Box)`
  width: 100vw;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
`;

export const ButtonWrapper = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
  border-radius: 20px;
  background-color: #457b9d;
  border: 1px solid #457b9d;

  :hover {
    border: 1px solid #a8dadc;
  }
`;

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: "1px solid",
    padding: "0 4px",
    backgroundColor: "#1d3557",
  },
}));

export const HeaderText = styled(Typography)`
  font-weight: 800;
  font-size: 34px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const CartText = styled(Typography)`
  font-size: 20px;
  font-weight: 400;
  color: #f1faee;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  margin-right: 5px;
`;
