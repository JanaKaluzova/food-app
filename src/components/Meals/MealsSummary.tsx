import { Typography } from "@mui/material";
import React from "react";
import { Section, Wrapper } from "./MealsSummary.styled";

export const MealsSummary: React.FC = () => {
  return (
    <Wrapper>
      <Typography variant="h3">Delicious Food, Delivered To You</Typography>
      <Section variant="body1">
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </Section>
      <Section variant="body1">
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </Section>
    </Wrapper>
  );
};
