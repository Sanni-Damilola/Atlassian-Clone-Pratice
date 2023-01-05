import React from "react";
import styled from "styled-components";
import img1 from "../Asset/Blog_360x265@2x.webp";
import img2 from "../Asset/Team Playbook_360x265@2x.webp";
import img3 from "../Asset/Agile Coach_360x265@2x.webp";
import img4 from "../Asset/High-Velocity@2x.jpg";
import img5 from "../Asset/worklife-ondemand.png";

const Card = () => {
  return (
    <Container>
      <Right bg="#eae6ff">
        <Imgwrapper>
          <Image src={img1} />
        </Imgwrapper>
        <br />
        <Span1>Work Life</Span1>
        <p>
          Real-life advice, inspiration, and stories <br /> from the working
          world today.
        </p>
        <Span>Read our blog</Span>
      </Right>
      <Right bg="#e6fcff">
        <Imgwrapper>
          <Image src={img2} />
        </Imgwrapper>
        <br />
        <Span1>Atlassian Team Playbook</Span1>
        <p>
          Solve common team challenges with <br /> these group exercises.
        </p>
        <Span>Check team health</Span>
      </Right>
      <Right bg="#eae6ff">
        <Imgwrapper>
          <Image src={img3} />
        </Imgwrapper>
        <br />
        <Span1>The Agile Coach</Span1>
        <p>
          Atlassian's no-nonsense guide to <br /> agile development.
        </p>
        <Span>Visit our resources</Span>
      </Right>
      <Left>
        <h6>EVENTS</h6>
        <br />
        <Span3>
          Hear from today’s <br /> fearless builders and <br /> innovators
          <br />
        </Span3>
        <br />
        <Span2>Learn more</Span2>
      </Left>
      <Lastimgwrapper>
        <Lasttwoimage src={img4} />
      </Lastimgwrapper>
      <Lastimgwrapper>
        <Lasttwoimage src={img5} />
      </Lastimgwrapper>
    </Container>
  );
};

export default Card;

const Lasttwoimage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 3px;
`;

const Span3 = styled.span`
  color: rgb(37, 56, 88);
  font-size: 36px;
  font-weight: 500;
`;

const Span2 = styled.span`
  color: rgb(38, 132, 255);
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
`;

const Left = styled.div`
  display: flex;
  width: 27.5%;
  flex-direction: column;
  justify-content: center;
  margin-left: 25px;
  h6 {
    color: #008da6;
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }

  height: 450px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
`;

const Span1 = styled.span`
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  color: #253858;
`;

const Right = styled.div<{ bg: string }>`
  width: 26%;
  text-align: center;
  margin: 20px;
  flex-direction: column;
  display: flex;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 420px;
  background-color: ${(bg) => bg.bg};
  border-radius: 3px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  transition: all 350ms;

  p {
    color: rgb(0, 0, 0, 0.7);
    font-weight: 500;
    font-size: 17px;
  }
`;
const Lastimgwrapper = styled.div`
  width: 26%;
  text-align: center;
  margin: 20px;
  flex-direction: column;
  display: flex;
  align-items: center;
  border-radius: 3px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  cursor: pointer;
  transition: all 350ms;
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
`;
const Span = styled.span`
  color: rgb(38, 132, 255);
  margin: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
`;
