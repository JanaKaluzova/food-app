import { FormControl } from "@mui/material";
import React from "react";

import { InputField, StyledButton, Wrapper } from "./MealItemForm.styled";

type MealInput = {
  label: string;
  id: string;
};

export const MealItemForm: React.FC<MealInput> = ({ label, id }) => {
  return (
    <Wrapper component="form">
      <FormControl>
        <InputField
          id={id}
          helperText={label}
          inputProps={{ step: 1, min: 1, max: 5, type: "number" }}
        />
      </FormControl>

      <StyledButton variant="outlined">+ Add</StyledButton>
    </Wrapper>
  );
};
