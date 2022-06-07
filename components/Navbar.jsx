import Image from "next/image";
import React, { useState } from "react";
import p1 from "../public/img/telephone.png";
import p2 from "../public/img/logo-r3.png";
import p3 from "../public/img/cart.png";
import {
  CallButton,
  CartContainer,
  CartCounter,
  Container,
  ItemContainer,
  List,
  ListItem,
  Text,
  TextContainer,
  Texts,
} from "../componentElements/NavbarElement";
import NavbarSide from "./NavbarSide";

const Navbar = () => {
  // const [openLink, setOpenLink] = useState(false);

  // function toggle() {
  //   setOpenLink(!openLink);
  // }
  // function toggle1() {
  //   setOpenLink(!openLink);
  // }
  return (
    <Container>
      {/* 1 */}
      <ItemContainer>
        <NavbarSide 
        // toggle={toggle} toggle1={toggle1} openLink={openLink} 
        />
      </ItemContainer>

      {/* 2 */}
      <ItemContainer>
        <CallButton>
          <Image src={p1} alt="phone" width="32" height="32" />
        </CallButton>
        <TextContainer>
          <Texts>
            <Text>ORDER NOW!</Text>
            <Text>0 300 4624660</Text>
          </Texts>
        </TextContainer>
      </ItemContainer>

      {/* 3 */}
      <ItemContainer>
        <TextContainer>
          <Image src={p2} alt="phone" width="80px" height="50px" />
        </TextContainer>
      </ItemContainer>

      {/* 4 */}
      <ItemContainer>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>Menu</ListItem>
          {/* <Image src={p2} alt="logo" width="160px" height="69px" /> */}
          <Image src={p2} alt="phone" width="80px" height="50px" />
          <ListItem>Events</ListItem>
          <ListItem>Blog</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </ItemContainer>

      {/* 5 */}
      <ItemContainer>
        <CartContainer>
          <Image src={p3} alt="" width="30" height="30" />
          {/* <Image src={p2} alt="phone" width="80px" height="50px" /> */}
          <CartCounter>2</CartCounter>
        </CartContainer>
      </ItemContainer>
    </Container>
  );
};

export default Navbar;
