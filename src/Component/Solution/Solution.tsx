import React from "react";
import styled from "styled-components";
import Solutionprops from "../props/Solutionprops";
import img3 from "../Asset/logo3.webp";
import img2 from "../Asset/logo2.webp";
import img4 from "../Asset/logo4.webp";
import img1 from "../Asset/logo1.webp";
import img7 from "../Asset/logo7.webp";
import img6 from "../Asset/logo6.webp";
import img9 from "../Asset/logo9.png";
import image1 from "../Asset/Solutions_1.webp";
import image2 from "../Asset/Solutions_2.webp";
import image3 from "../Asset/Solutions_3.webp";

const Solution = () => {
  const [show1, setshow1] = React.useState<boolean>(true);
  const [show2, setshow2] = React.useState<boolean>(false);
  const [show3, setshow3] = React.useState<boolean>(false);

  const fun1 = () => {
    setshow1(true);
    setshow2(false);
    setshow3(false);
  };
  const fun2 = () => {
    setshow2(true);
    setshow1(false);
    setshow3(false);
  };
  const fun3 = () => {
    setshow2(false);
    setshow1(false);
    setshow3(true);
  };

  return (
    <Container>
      <Span>Atlassian solutions are designed for all types of work</Span>
      <Buttonwrap>
        <Button
          fw={show1 ? "value" : ""}
          cl={show1 ? "value" : ""}
          bg={show1 ? "value" : ""}
          onClick={fun1}
        >
          Work Management
        </Button>
        <Button
          fw={show2 ? "value" : ""}
          cl={show2 ? "value" : ""}
          onClick={fun2}
          bg={show2 ? "value" : ""}
        >
          IT Service Mangement
        </Button>
        <Button
          fw={show3 ? "value" : ""}
          cl={show3 ? "value" : ""}
          onClick={fun3}
          bg={show3 ? "value" : ""}
        >
          Aglie and DevOps
        </Button>
      </Buttonwrap>
      <View1>
        {show1 ? (
          <Solutionprops
            view={49}
            leftspan="Make work flow across teams while connecting to company goals"
            image={image1}
            buttonspan="Work differently, together"
            disp1="value"
            jc=""
            sa=""
            disp2="value"
            disp3="value"
            wd={83}
            hgg={80}
            bg="rgb(223, 225, 229)"
            img1={img2}
            img2={img7}
            img3={img4}
            hg={33}
            span1="Confluence"
            p1="Content collaboration"
            span2="Trello"
            p2="Visual project management"
            span3="Jira Work Management"
            p3="Businedd team collaboration"
            leftspanwidth={60}
          />
        ) : null}
      </View1>
      <View1>
        {show2 ? (
          <Solutionprops
            view={44}
            leftspan="Enable your dev, IT ops, and business teams to deliver great service experiences"
            image={image2}
            buttonspan="Deliver at high velocity"
            disp1="value"
            jc=""
            sa=""
            disp2=""
            disp3=""
            wd={83}
            hgg={80}
            bg="rgb(223, 225, 229)"
            img1={img1}
            img2=""
            img3=""
            hg={33}
            span1="Jira Service Management"
            p1="High-velocity ITSM"
            span2="Trello"
            p2=""
            span3=""
            p3=""
            leftspanwidth={68}
          />
        ) : null}
      </View1>
      <View1>
        {show3 ? (
          <Solutionprops
            leftspanwidth={68}
            view={42}
            leftspan="Run a world-class agile software company—from discovery to delivery and operations"
            image={image3}
            buttonspan="Explore Open DevOps"
            disp1="value"
            jc=""
            sa=""
            disp2="value"
            disp3="value"
            wd={83}
            hgg={80}
            bg="rgb(223, 225, 229)"
            img1={img3}
            img2={img6}
            img3={img9}
            hg={33}
            span1="Jira Software"
            p1="Project and isuue tracking"
            span2="Jira Allgn"
            p2="Enterprice Agile planning"
            span3="Compass"
            p3="Developer experience platform"
          />
        ) : null}
      </View1>
    </Container>
  );
};

export default Solution;

const View1 = styled.div``;

const Buttonwrap = styled.div`
  margin-top: 30px;
`;
const Button = styled.button<{ bg: string; cl: string; fw: string }>`
  height: 90px;
  width: 300px;
  margin-right: 10px;
  margin-left: 10px;
  border: 0;
  border-radius: 50px;
  background-color: ${({ bg }) => (bg ? "#0052cc" : "#deebff")};
  color: ${({ cl }) => (cl ? "#deebff" : "#0052cc")};
  font-weight: bold;
  cursor: pointer;
  font-size: 20px;
  font-weight: ${({ fw }) => (fw ? "900" : "")};
  transition: all 350ms;
`;

const Container = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

const Span = styled.div`
  font-size: 34px;
  font-weight: 600;
  color: rgb(0, 0, 0, 0.8);
`;
