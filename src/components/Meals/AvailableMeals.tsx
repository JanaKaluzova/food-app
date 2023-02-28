import React, { useEffect, useState } from "react";
import { useHttp } from "../../hooks/use-http";
import {
  Loading,
  MealsList,
  MealsListWrapper,
  StyledCard,
} from "./AvailableMeals.styled";
import { MealItem } from "./MealItem/MealItem";

export type Meals = {
  id: string;
  name: string;
  description?: string;
  price: number;
};

export const AvailableMeals: React.FC = () => {
  const [meals, setMeals] = useState<Meals[]>([]);

  const { isLoading, httpError, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const transformMeals = (mealsObj: Meals[]) => {
      const loadedMeals: Meals[] = [];

      for (const key in mealsObj) {
        loadedMeals.push({
          id: key,
          name: mealsObj[key].name,
          description: mealsObj[key].description,
          price: mealsObj[key].price,
        });
      }
      setMeals(loadedMeals);
    };

    fetchMeals({
      requestConfig: {
        url: "https://food-app-a5e21-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      },
      applyData: transformMeals,
    });
  }, []);

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  if (httpError) {
    return <p>{httpError}</p>;
  }

  const mealsList = meals.map((meal) => (
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
