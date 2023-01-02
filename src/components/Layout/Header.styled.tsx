import styled from "@emotion/styled";
import { AppBar, Box, Button } from "@mui/material";

export const StyledHeader = styled(AppBar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #8a2b06;
  color: white;
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
`;
