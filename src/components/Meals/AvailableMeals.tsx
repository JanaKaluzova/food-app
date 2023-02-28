import { useQuery } from "@tanstack/react-query";

import {
  Loading,
  MealsList,
  MealsListWrapper,
  StyledCard,
} from "./AvailableMeals.styled";
import { MealItem } from "./MealItem/MealItem";
import axios from "axios";

export type Meals = {
  id: string;
  name: string;
  description?: string;
  price: number;
};

export const AvailableMeals: React.FC = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["meals"],
    queryFn: () =>
      axios
        .get(
          "https://food-app-a5e21-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
        )
        .then((res) => {
          const loadedMeals: Meals[] = [];

          for (const key in res.data) {
            loadedMeals.push({
              id: key,
              name: res.data[key].name,
              description: res.data[key].description,
              price: res.data[key].price,
            });
          }
          return loadedMeals;
        }),
  });

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  if (isError) {
    return <Loading>{JSON.stringify(error)}</Loading>;
  }

  const mealsList = data?.map((meal: Meals) => (
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
