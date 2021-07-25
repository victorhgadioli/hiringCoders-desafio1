import styled from "styled-components";
import {
  TextField,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export const CardStyled = styled(Card)`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 400px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  padding: 0 0;
  color: black;
  font-size: 15px;
`;

export const ButtonStoreContainer = styled('div')`
width: 100%;
display: flex;
justify-content: center;
height: 30px;
`;

export const CardActionsStyled = styled(CardActions)`
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardMediaStyled = styled(CardMedia)`
  height: 60vh;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 1300px) {
    height: 40vh;
  }

  @media (max-width: 800px) {
    height: 30vh;
  }

  @media (max-height: 600px) {
    height: 0;
  }
`;

export const TextFieldStyled = styled(TextField)`
  background-color: rgb(253, 253, 253);
  margin: 0rem 1rem;
  min-width: 300px;
`;

export const ButtonStyled = styled(Button)`
margin: 1rem;
  width: 16rem;
  background-color: #3c6c83;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 14px 14px;
  &:hover {
    background-color: #1a4c65;
  }
}
`;
