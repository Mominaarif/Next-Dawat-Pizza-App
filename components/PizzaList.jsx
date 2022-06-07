import React from "react";
import { Container, Desc, H1, Wrapper } from "../componentElements/PizzaListElement";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <Container>
      <H1>THE BEST PIZZA IN TOWN</H1>
      <Desc>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis
        quis metus nec porttitor.  Aenean et bibendum ex. Mauris et ante eu nunc porta rhoncus Pellentesque dui augue, congue id faucibus a,
        consectetur et est
      </Desc>
      <Wrapper>
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
      </Wrapper>
    </Container>
  );
};

export default PizzaList;
