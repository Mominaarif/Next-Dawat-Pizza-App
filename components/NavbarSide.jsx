// import Image from "next/image";
import React, { useState } from "react";

import Close from "@mui/icons-material/Close";
import { Menu } from "@mui/icons-material";
import {
  Container,
  HiddenMenuLogo,
  List,
  ListItem,
  SidebarContainer,
  Icon,
  SidebarMenu,
  HideOrderBtn,
} from "../componentElements/NavbarSideElement";

const NavbarSide = (
  // {toggle, toggle1, openLink}
  ) => {
  const [openLink, setOpenLink] = useState(false);

  function toggle() {
    setOpenLink(!openLink);
  }
  function toggle1() {
    setOpenLink(!openLink);
  }
  return (
    <Container>
      <div>
        <button
          onClick={toggle}
          style={{ backgroundColor: "#d1411e", border: "none", color: "white" }}
        >
          <Menu style={{ fontSize: "40px" }} />
        </button>
        <div
          className="hiddenLinks"
          style={{ display: openLink ? "block" : "none" }}
        >
          <SidebarContainer>
            <HiddenMenuLogo>
              <Icon>
                <Close
                  onClick={toggle1}
                  style={{ color: "white", fontSize: "40px" }}
                />
              </Icon>
            </HiddenMenuLogo>

            <SidebarMenu>
              <List>
                <ListItem>Homepage</ListItem>
                <ListItem>Products</ListItem>
                <ListItem>Menu</ListItem>
                <ListItem>Events</ListItem>
                <ListItem>Blog</ListItem>
                <ListItem>Contact</ListItem>
              </List>
            </SidebarMenu>
            <HideOrderBtn>
              <p>Order Now</p>
            </HideOrderBtn>
          </SidebarContainer>
        </div>
      </div>
    </Container>
  );
};

export default NavbarSide;
