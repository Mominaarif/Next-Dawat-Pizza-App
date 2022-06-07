import Image from "next/image";
import React, { useState } from "react";

import {
  ArrowContainer,
  Container,
  ImageContainer,
  Wrapper,
} from "../componentElements/FeaturedElement";
import p1 from "../public/img/arrowl.png";
import p2 from "../public/img/arrowr.png";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  const images = ["/img/p4.png", "/img/p4.png", "/img/p3.png"];
  return (
    <Container>
      <ArrowContainer style={{ left: 0 }} onClick={() => handleArrow("l")}>
        <Image src={p1} alt="" layout="fill" objectFit="contain" />
      </ArrowContainer>
      <Wrapper style={{ transform: `translateX(${-100 * index}vw)` }}>
        {images.map((img, x) => (
          <ImageContainer>
            <Image src={img} key={x} alt="" layout="fill" objectFit="contain" priority="false" />
          </ImageContainer>
        ))}
      </Wrapper>
      <ArrowContainer style={{ right: 0 }} onClick={() => handleArrow("r")}>
        <Image src={p2} alt="" layout="fill" objectFit="contain" />
      </ArrowContainer>
    </Container>
  );
};

export default Featured;
