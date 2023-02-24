import React from "react";
import {
  MealsList,
  MealsListWrapper,
  StyledCard,
} from "./AvailableMeals.styled";
import { MealItem } from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Čerstvá ryba a zelenina",
    price: 235,
  },
  {
    id: "m2",
    name: "Řízek",
    description: "Německá specialita!",
    price: 199,
  },
  {
    id: "m3",
    name: "Hamburger",
    description: "Americký, masitý",
    price: 259,
  },
  {
    id: "m4",
    name: "Zelená mísa",
    description: "Zdravá...a zelená...",
    price: 145,
  },
];

export const AvailableMeals: React.FC = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <MealsListWrapper>
      <StyledCard>
        <MealsList>{mealsList}</MealsList>
      </StyledCard>
    </MealsListWrapper>
  );
};
