import styled from "styled-components";
import { AppBar } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import RefreshIcon from "@material-ui/icons/Refresh";
import StoreIcon from '@material-ui/icons/Store';

export const HeaderAppBar = styled(AppBar)`
  background-color: #3c6c83;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  border-radius: 4px;
  height: 7%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const IconButtonStyled = styled(IconButton)``;

export const CartIconStyled = styled(ShoppingCartIcon)`
  color: #eeeeee;
`;

export const TypographyStyled = styled(Typography)`
  color: #eeeeee;
  font-weight: bold;
  position: relative;
  right: 10px;
`;

export const RefreshIconStyled = styled(RefreshIcon)`
  color: #eeeeee;
  position: relative;
  right: 10px;
`;

export const StoreIconStyled = styled(StoreIcon)`
  color: #eeeeee;
`;
