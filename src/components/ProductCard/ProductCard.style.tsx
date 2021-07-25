import styled from "styled-components";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

export const CardStyled = styled(Card)`
  width: 330px;
  height: 450px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;

  @media (max-width: 800px) {
    width: 280px;
    height: 400px;
  }

  @media (max-width: 400px) {
    width: 250px;
    height: 400px;
  }

  @media (max-width: 300px) {
    width: 230px;
    height: 380px;
  }
`;

export const ProductTitle = styled(Typography)`
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  overflow: hidden;
`;

export const PriceStyled = styled(Typography)`
  font-weight: bold;
  font-size: 30px;
  margin-left: 10px;
  margin-right: 10px;
  color: #555555;
`;

export const CardActionsStyled = styled(CardActions)`
display: flex;
flex-direction: row;
justify-content: space-between;
position: relative;
bottom: 25px;
`;

export const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardMediaStyled = styled(CardMedia)`
  height: 300px;
  width: 300px;
  border-radius: 12px;

  @media (max-width: 800px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 400px) {
    width: 220px;
    height: 220px;
  }
  @media (max-width: 300px) {
    width: 200px;
    height: 200px;
  }
`;



