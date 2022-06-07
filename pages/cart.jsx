import Image from "next/image";
import React from "react";
import {
  CheckoutButton,
  Container,
  Extras,
  ImageContainer,
  LeftContainer,
  Name,
  Price,
  Quantity,
  RightContainer,
  Table,
  TD,
  TH,
  Title,
  Total,
  TotalText,
  TotalTextTitle,
  TR,
  Wrapper,
} from "../componentElements/CartElement";

const Cart = () => {
  return (
    <Container>
      <LeftContainer>
        <Table>
          <TR>
            <TH>Product</TH>
            <TH>Name</TH>
            <TH>Extras</TH>
            <TH>Price</TH>
            <TH>Quantity</TH>
            <TH>Total</TH>
          </TR>
          <TR>
            <TD>
              <ImageContainer>
                <Image
                  src="/img/p5.png"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </ImageContainer>
            </TD>
            <TD>
              <Name>CORALZO</Name>
            </TD>
            <TD>
              <Extras>Double ingredient, spicy sauce</Extras>
            </TD>
            <TD>
              <Price>$19.90</Price>
            </TD>
            <TD>
              <Quantity>2</Quantity>
            </TD>
            <TD>
              <Total>$39.80</Total>
            </TD>
          </TR>
          <TR>
            <TD>
              <ImageContainer>
                <Image
                  src="/img/p5.png"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </ImageContainer>
            </TD>
            <TD>
              <Name>CORALZO</Name>
            </TD>
            <TD>
              <Extras>Double ingredient, spicy sauce</Extras>
            </TD>
            <TD>
              <Price>$19.90</Price>
            </TD>
            <TD>
              <Quantity>2</Quantity>
            </TD>
            <TD>
              <Total>$39.80</Total>
            </TD>
          </TR>
        </Table>
      </LeftContainer>
      <RightContainer>
        <Wrapper>
          <Title>CART TOTAL</Title>
          <TotalText>
            <TotalTextTitle>Subtotal:</TotalTextTitle>
            $79.60
          </TotalText>
          <TotalText>
            <TotalTextTitle>Discount:</TotalTextTitle>
            $0.00
          </TotalText>
          <TotalText>
            <TotalTextTitle>Total:</TotalTextTitle>
            $79.60
          </TotalText>
          <CheckoutButton>CHECKOUT NOW</CheckoutButton>
        </Wrapper>
      </RightContainer>
    </Container>
  );
};

export default Cart;
