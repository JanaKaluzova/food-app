import { Box } from "@mui/system";
import {
  StyledHeader,
  ImageBox,
  ButtonWrapper,
  StyledBadge,
  HeaderText,
  CartText,
} from "./Header.styled";
import MealsImage from "../../assets/meal.jpg";

import { useContext } from "react";
import { CartContext } from "../../store/Cart-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

type Showcart = {
  onShowCart: () => void;
};

export const Header: React.FC<Showcart> = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledHeader>
        <HeaderText>Nejlepší rozvoz jídla</HeaderText>
        <ButtonWrapper variant="outlined" onClick={onShowCart}>
          <StyledBadge badgeContent={numberOfCartItems} color="success">
            <FontAwesomeIcon icon={faBasketShopping} size="2x" color="white" />
          </StyledBadge>

          <CartText>Košík</CartText>
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
