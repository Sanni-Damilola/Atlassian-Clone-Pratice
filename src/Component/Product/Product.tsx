import React from "react";
import styled from "styled-components";
import Featuredprops from "../props/Featuredprops";
import img1 from "../Asset/logo1.webp";
import img2 from "../Asset/logo2.webp";
import img3 from "../Asset/logo3.webp";
import img4 from "../Asset/logo4.webp";
import img7 from "../Asset/logo7.webp";
import img8 from "../Asset/logo8.png";
import img9 from "../Asset/logo9.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaLightbulb } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Product = () => {
  const [show, setshow] = React.useState<boolean>(true);

  const func = () => {
    setshow(!false);
  };

  return (
    <Dropdown>
      <Wrapper>
        <Left>
          <Span>featured</Span>
          <Up>
            <Wrap>
              <Featuredprops
                bg="rgb(223, 225, 229)"
                img={img3}
                hg={26}
                p="Project and issue tracking"
                span="Jira Software"
              />
            </Wrap>
            <Wrap>
              <Featuredprops
                bg="rgb(223, 225, 229)"
                img={img2}
                hg={26}
                p="Content collaboration"
                span="Confluence"
              />
            </Wrap>
            <Wrap>
              <Featuredprops
                bg="rgb(223, 225, 229)"
                p="High-Velocity ITSM"
                img={img1}
                hg={26}
                span="Jira Service Management"
              />
            </Wrap>
            <Wrap>
              <Featuredprops
                bg="rgb(223, 225, 229)"
                img={img7}
                hg={26}
                p="Visual project management"
                span="Trello"
              />
            </Wrap>
            <View>
              <span>View all product</span>
              <Icon>
                <HiArrowLongRight />
              </Icon>
            </View>
          </Up>
          <Mid>
            <Div1>
              <ChildWrap>
                <Midicon>
                  <FaLightbulb />
                </Midicon>
                <Textwrap>
                  <span>New products from Point A</span>
                  <p>innovations from Atlassian</p>
                </Textwrap>
              </ChildWrap>
              <Midview>
                <span>View all</span>
                <Midicon2>
                  <HiArrowLongRight />
                </Midicon2>
              </Midview>
            </Div1>
            <Div2>
              <Middiv>
                <Featuredprops
                  bg="white"
                  img={img8}
                  hg={26}
                  span="Atlas"
                  p="Teamwork directory"
                />
              </Middiv>
              <Middiv>
                <Featuredprops
                  bg="white"
                  img={img9}
                  span="Compass"
                  p="Developer experience platform"
                  hg={26}
                />
              </Middiv>
            </Div2>
          </Mid>
          <Down>
            <span>Marketplace</span>
            <Downview>
              <p>Connect thousands of for all your Atlassian product</p>
              <Midicon2>
                <HiArrowLongRight />
              </Midicon2>
            </Downview>
          </Down>
        </Left>
        <Right>
          <Leftspan>BROWSE BY SOLUTION</Leftspan>
          <Div>
            <span>Agile % DevOps</span>
            <p>
              Run a world-class agile software organization from discovery to
              delivery and operations
            </p>
          </Div>
          <Div>
            <span> IT Service Management</span>
            <p>
              Enable dev, IT ops, and business teams to deliver great service at
              high velocity
            </p>
          </Div>
          <Div>
            <span>Work Management</span>
            <p>
              Empower autonomous teams without losing organizational alignment
            </p>
          </Div>
          <br />
          <Leftspan>BROWSE BY TEAM TYPE</Leftspan> <br />
          <br />
          <Childleftspan>Enterprice</Childleftspan> <br />
          <Childleftspan>Small business</Childleftspan> <br />
          <Childleftspan>Startup</Childleftspan> <br />
          <Childleftspan>Non-profit</Childleftspan> <br />
          <Cancel to={"/"}>X</Cancel>
        </Right>
      </Wrapper>
    </Dropdown>
  );
};

export default Product;

const Cancel = styled(NavLink)`
  text-decoration: none;
  position: absolute;
  top: -15px;
  right: -30px;
  font-weight: 700;
  cursor: pointer;
  color: rgb(66, 82, 110, 0.8);
`;

const Childleftspan = styled.span`
  margin-left: 30px;
  font-weight: 500;
  font-size: 15px;
  color: rgb(66, 82, 110, 0.8);
  line-height: 25px;
  cursor: pointer;
  transition: all 30ms;
  :hover {
    color: rgb(38, 132, 255);
  }
`;

const Div = styled.div`
  cursor: pointer;
  margin-top: 15px;
  width: 100%;
  line-height: 19px;
  span {
    font-weight: 500;
    font-size: 15px;
    color: rgb(66, 82, 110);
  }
  transition: all 3050ms;
  :hover {
    span {
      color: rgb(38, 132, 255);
    }
  }

  margin-left: 30px;
  p {
    color: rgb(66, 82, 110, 0.8);
    font-size: 12px;
    margin: 0;
    margin-top: 2px;
    font-weight: 500;
  }
`;

const Middiv = styled.div`
  margin-right: 110px;
`;

const Midview = styled.div`
  display: flex;
  color: rgb(0, 0, 0, 0.8);
  align-items: center;
  cursor: pointer;
  margin-right: 5px;
  width: 88px;
  transition: all 350ms;

  span {
    font-weight: 500;
    font-size: 14px;
    margin-right: 6px;
  }
  :hover {
    justify-content: space-between;
  }
`;

const Textwrap = styled.div`
  flex-direction: column;
  cursor: pointer;
  p {
    margin: 0;
    color: rgb(0, 0, 0, 0.7);
    font-size: 12px;
    font-weight: 500;
  }

  span {
    font-weight: 500;
    color: rgb(0, 0, 0, 0.8);
  }
`;

const Midicon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  font-size: 19px;
`;

const Midicon2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: rgb(0, 0, 0, 0.8);
  margin-right: 8px;
  margin-top: 3px;
`;

const Div1 = styled.div`
  display: flex;
  justify-content: center;
  width: 93%;
  align-items: center;
  justify-content: space-between;
`;
const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ChildWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const View = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  cursor: pointer;
  span {
    color: #4a84db;
    font-weight: 500;
    font-size: 14px;
  }
  :hover {
    justify-content: space-between;
  }
  width: 38%;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: blue;
  margin-left: 8px;
  margin-top: 2px;
  /* transition: all 350ms; */
`;

const Wrapper = styled.div`
  width: 87%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`;

const Left = styled.div`
  width: 90%;
  height: 100%;
`;
const Mid = styled.div`
  width: 95%;
  margin-top: 30px;
  border-radius: 5px;
  flex-direction: column;
  background-color: rgb(222, 235, 255);
  display: flex;
  justify-content: center;
  height: 30%;
  align-items: center;
  justify-content: space-around;
`;
const Up = styled.div`
  width: 80%;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Span = styled.span`
  font-size: 13px;
  font-weight: 600;
  margin-left: 10px;
  color: rgb(0, 0, 0, 0.6);
  text-transform: uppercase;
`;
const Wrap = styled.div`
  padding-bottom: 40px;
`;
const Down = styled.div`
  display: flex;
  flex-direction: column;
  width: 91%;
  color: rgb(0, 0, 0, 0.7);

  span {
    margin-top: 20px;
    font-weight: 500;
    margin-left: 20px;
  }
  justify-content: space-between;
  margin-top: 40px;
  border-top: 1px solid rgb(0, 0, 0, 0.2);
`;

const Downview = styled.div`
  display: flex;
  color: rgb(0, 0, 0, 0.8);
  align-items: center;
  cursor: pointer;
  margin-right: 5px;
  width: 43%;
  margin-left: 20px;
  p {
    margin: 0;
    font-size: 13px;
    margin-right: 6px;
    font-weight: 500;
    color: rgb(0, 0, 0, 0.5);
  }
  :hover {
    justify-content: space-between;
  }
`;

const Right = styled.div`
  width: 30%;
  height: 100%;
  border-left: 1px solid rgb(0, 0, 0, 0.2);
  flex-direction: column;
  position: relative;
`;

const Leftspan = styled.span`
  margin-left: 30px;
  font-weight: 500;
  font-size: 13px;
  color: rgb(66, 82, 110);
`;

const Dropdown = styled.div`
  position: absolute;
  top: 75px;
  width: 100%;
  height: 620px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
