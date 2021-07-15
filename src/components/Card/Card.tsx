import { CardActionArea, Typography } from "@material-ui/core";
import React, { useState } from "react";
import {
  CardStyled,
  TextFieldStyled,
  ButtonStyled,
  CardActionsStyled,
  CardMediaStyled,
  CardContentStyled,
} from "./Card.style";
import * as EmailValidator from "email-validator";

const Card: React.FC = (props) => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");

  const validEmailAction = () => {
    setValidEmail("valid");
    localStorage.setItem("email", email);
  };

  return (
    <CardStyled>
      <CardActionArea>
        <CardContentStyled>
          <CardMediaStyled
            image="/blackfriday.gif"
            title="Contemplative Reptile"
          />
          <Typography gutterBottom variant="h5" component="h2">
            Não perca nossas promoções de Black Friday de produtos de automação!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Se inscreva e seja o primeira a saber de novidades do mercado de
            automação e promoções da loja!
          </Typography>
        </CardContentStyled>
      </CardActionArea>
      <CardActionsStyled>
        {validEmail === "invalid" ? (
          <TextFieldStyled
            error
            fullWidth
            label="E-mail inválido"
            value={email}
            variant="outlined"
            onChange={(event) => setEmail(event.target.value)}
          />
        ) : (
          <TextFieldStyled
            variant="outlined"
            label="Digite seu e-mail"
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        )}
        <ButtonStyled
          onClick={() => {
            EmailValidator.validate(email) === true
              ? validEmailAction()
              : setValidEmail("invalid");
          }}
        >
          {validEmail === "valid" ? "Inscrito!" : "Inscrever-se"}
        </ButtonStyled>
      </CardActionsStyled>
    </CardStyled>
  );
};

export default Card;
