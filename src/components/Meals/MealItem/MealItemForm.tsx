import { FormControl, FormHelperText } from "@mui/material";
import React from "react";

import { InputField, StyledButton, Wrapper } from "./MealItemForm.styled";

type MealInput = {
  label: string;
  id: string;
  onAddToCart: (amount: number) => void;
};

export const MealItemForm: React.FC<MealInput> = ({
  label,
  id,
  onAddToCart,
}) => {
  const [amountIsValid, setAmountIsValid] = React.useState(true);
  const amountInputRef = React.useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current!.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };
  return (
    <Wrapper component="form" onSubmit={submitHandler}>
      <FormControl>
        <InputField
          inputRef={amountInputRef}
          id={id}
          inputProps={{
            step: 1,
            min: 1,
            max: 5,
            type: "number",
            defaultValue: 1,
          }}
        />
        <FormHelperText>{label}</FormHelperText>
      </FormControl>

      <StyledButton type="submit" variant="outlined">
        + Add
      </StyledButton>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </Wrapper>
  );
};
