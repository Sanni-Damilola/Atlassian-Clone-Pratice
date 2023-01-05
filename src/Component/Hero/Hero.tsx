import React from "react";
import styled from "styled-components";
import bgleft from "../Asset/left.png";
import bgright from "../Asset/right.jpg";

const Hero = () => {
  return (
    <Container>
      <Right>
        <i>
          It’s possible <br /> <i>with teamwork</i>
        </i>
      </Right>
      <Left src={bgright} />
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`;

const Right = styled.div`
  height: 500px;
  background-image: url(${bgleft});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 60px;
    font-weight: 500;
    color: #253858;
    margin-bottom: 50px;

    i {
      margin-left: 70px;
    }
  }
`;
const Left = styled.img`
  height: 500px;
  width: 54%;
  object-fit: contain;
`;
