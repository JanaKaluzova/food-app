import { Box } from "@mui/material";
import React from "react";
import { Description, Header, MealsList, Price } from "./MealItem.styled";

type Meal = {
  name: string;
  description: string;
  price: number;
};

export const MealItem: React.FC<Meal> = ({ name, description, price }) => {
  const priceFormatted = `$ ${price.toFixed(2)}`;

  return (
    <MealsList>
      <Box>
        <Header variant="h5">{name}</Header>
        <Description variant="body1">{description}</Description>
        <Price variant="body1">{priceFormatted}</Price>
      </Box>
      <Box></Box>
    </MealsList>
  );
};
