import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  StyledHeader,
  ImageBox,
  ButtonWrapper,
  StyledBadge,
} from "./Header.styled";
import MealsImage from "../../assets/meal.jpg";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useContext } from "react";
import { CartContext } from "../../store/Cart-context";

type Showcart = {
  onShowCart: () => void;
};

export const Header: React.FC<Showcart> = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  console.log(numberOfCartItems);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledHeader>
        <Typography variant="h4">React Meals</Typography>
        <ButtonWrapper variant="outlined" onClick={onShowCart}>
          <StyledBadge badgeContent={numberOfCartItems} color="success">
            <ShoppingBasketOutlinedIcon
              fontSize="large"
              sx={{ color: "#fff" }}
            />
          </StyledBadge>

          <Typography sx={{ color: "#fff" }}>Cart</Typography>
        </ButtonWrapper>
      </StyledHeader>
      <ImageBox>
        <Box
          component="img"
          src={MealsImage}
          alt={"table full of food"}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageBox>
    </Box>
  );
};
