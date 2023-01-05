import React from "react";
import styled from "styled-components";
import img from "../Asset/Community_760x235@2x.webp";

const Explore = () => {
  return (
    <Container>
      <Left>
        <h6>TEAM ESSENTIALS</h6>
        <br />
        <span>
          Explore resources to <br /> unleash the potential <br /> of your team
        </span>
      </Left>
      <Right>
        <Imgwrapper>
          <Image src={img} />
        </Imgwrapper>
        <br />
        <Span1>Atlassian Community</Span1>
        <p>
          Connect globally and meet locally to get more out of our products.
        </p>
        <Wrap>
          <Span>Search the forum</Span>
          <Span>Join our community</Span>
        </Wrap>
      </Right>
    </Container>
  );
};

export default Explore;

const Span1 = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: rgb(0, 0, 0, 0.9);
`;

const Container = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
`;
const Right = styled.div`
  width: 55%;
  margin-left: 54px;
  flex-direction: column;
  display: flex;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 400px;
  background-color: rgb(255, 235, 229);
  transition: all 350ms;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  p {
    color: rgb(0, 0, 0, 0.7);
    font-weight: 500;
    font-size: 16px;
  }
`;

const Left = styled.div`
  h6 {
    color: #008da6;
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }

  span {
    color: rgb(37, 56, 88);
    font-size: 36px;
    font-weight: 500;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Imgwrapper = styled.div`
  width: 100%;
  height: 220px;
`;
const Wrap = styled.div`
  display: flex;
  font-size: 15px;
  width: 60%;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`;
const Span = styled.span`
  color: rgb(38, 132, 255);
  margin: 20px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
`;
