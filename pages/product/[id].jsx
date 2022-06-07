import Image from "next/image";
import React, { useState } from "react";
import {
  AddCart,
  AddCartButton,
  Checkbox,
  Choose,
  Container,
  Desc,
  ImageContainer,
  Ingredients,
  Lable,
  LeftSide,
  Option,
  Price,
  Quantity,
  RightSide,
  Size,
  Sizes,
  SmallNumber,
  Title,
} from "../../componentElements/ProductElement";

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/p2.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };
  return (
    <Container>
      <LeftSide>
        <ImageContainer>
          <Image src={pizza.img} alt="" layout="fill" priority="false" />
        </ImageContainer>
      </LeftSide>
      <RightSide>
        <Title>{pizza.name}</Title>
        <Price>${pizza.price[size]}</Price>
        <Desc>{pizza.desc}</Desc>
        <Choose>Choose the size</Choose>
        <Sizes>
          <Size onClick={() => setSize(0)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <SmallNumber>Small</SmallNumber>
          </Size>
          <Size onClick={() => setSize(1)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <SmallNumber>Medium</SmallNumber>
          </Size>
          <Size onClick={() => setSize(2)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <SmallNumber>Large</SmallNumber>
          </Size>
        </Sizes>
        <Choose>Choose additional ingredients</Choose>
        <Ingredients>
          <Option>
            <Checkbox type="checkbox" name="double" id="double" />
            <Lable htmlFor="double">Double ingredients</Lable>
          </Option>

          <Option>
            <Checkbox type="checkbox" name="cheese" id="cheese" />
            <Lable htmlFor="cheese">Extra Cheeses</Lable>
          </Option>

          <Option>
            <Checkbox type="checkbox" name="spicy" id="spicy" />
            <Lable htmlFor="spicy">Spicy Sauce</Lable>
          </Option>

          <Option>
            <Checkbox type="checkbox" name="garlic" id="garlic" />
            <Lable htmlFor="garlic">Garlic Sauce</Lable>
          </Option>
        </Ingredients>
        <AddCart>
          <Quantity  type="number" defaultValue={1} />
          <AddCartButton>Add to Cart</AddCartButton>
        </AddCart>
      </RightSide>
    </Container>
  );
};

export default Product;
