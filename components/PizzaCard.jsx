import Image from "next/image";
import React from "react";
import {
  Container,
  Desc,
  Price,
  Title,
} from "../componentElements/PizzaCardElement";

const PizzaCard = () => {
  return (
    <Container>
      <Image src="/img/p5.png" alt="" width="500" height="500" />
      <Title>FIORI DI ZUCCA</Title>
      <Price>$19.90</Price>
      <Desc>Lorem ipsum dolor sit amet</Desc>
    </Container>
  );
};

export default PizzaCard;
