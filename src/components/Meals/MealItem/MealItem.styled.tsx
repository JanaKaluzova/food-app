import { List, styled, Typography } from "@mui/material";

export const MealsList = styled(List)`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`;

export const Header = styled(Typography)`
  margin: 0 0 0.25rem 0;
  font-weight: 800;
`;

export const Description = styled(Typography)`
  font-style: italic;
`;

export const Price = styled(Typography)`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`;
