import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  StyledHeader,
  ImageBox,
  ButtonWrapper,
  StyledBadge,
} from "./Header.styled";
import MealsImage from "../../assets/meal.jpg";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

export const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledHeader>
        <Typography variant="h4">React Meals</Typography>
        <ButtonWrapper variant="outlined">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="success">
              <ShoppingBasketOutlinedIcon
                fontSize="large"
                sx={{ color: "#fff" }}
              />
            </StyledBadge>
          </IconButton>
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
