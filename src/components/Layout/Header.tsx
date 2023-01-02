import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { StyledHeader, ImageBox, ButtonWrapper } from "./Header.styled";
import MealsImage from "../../assets/meal.jpg";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledHeader>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          React Meals
        </Typography>
        <ButtonWrapper variant="outlined">
          <ShoppingBasketOutlinedIcon />
          <Typography>Cart</Typography>
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
