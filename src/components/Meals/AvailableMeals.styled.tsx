import styled from "@emotion/styled";
import { Box, Card, List } from "@mui/material";

export const MealsListWrapper = styled(Box)`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  /* animation: meals-appear 1s ease-out forwards; */
`;

export const MealsList = styled(List)`
  list-style: none;
  margin: 0;
  padding: 10px;
`;

// @keyframes meals-appear {
//     from {
//       opacity: 0;
//       transform: translateY(3rem);
//     }

//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }

export const StyledCard = styled(Card)`
  background-color: #ffffffe6;
  border-radius: 10px;
  border: 0.5px solid grey;
`;

export const Loading = styled(Box)`
  text-align: center;
  color: #1d3557;
  font-size: 24px;
`;

export const ErrorMessage = styled(Box)`
  text-align: center;
  color: #1d3557;
`;
