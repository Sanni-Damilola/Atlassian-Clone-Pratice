import React from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import logo from "../Asset/Atlassian-horizontal-blue-rgb.webp";
import { NavLink } from "react-router-dom";
import Navprops from "../props/Navprops";

const Header = () => {
  const [show, setshow] = React.useState<boolean>(false);
  const [show1, setshow1] = React.useState<boolean>(false);
  const [show2, setshow2] = React.useState<boolean>(false);
  const [show3, setshow3] = React.useState<boolean>(false);

  const func1 = () => {
    setshow1(!show1);
    setshow2(false);
    setshow3(false);
  };
  const func2 = () => {
    setshow2(!show2);
    setshow1(false);
    setshow3(false);
  };
  const func3 = () => {
    setshow1(false);
    setshow2(false);
    setshow3(!show3);
  };

  return (
    <Container bg={show1 ? "1px solid rgb(0, 0, 0, 0.1)" : ""}>
      <Wrapper>
        <Right>
          <Logo src={logo} />
          {show1 ? (
            <Nav bg={show1 ? "lavender" : ""} onClick={func1} to={"/"}>
              Product
              <div>
                <FiChevronDown />
              </div>
            </Nav>
          ) : (
            <Nav bg={show1 ? "" : ""} onClick={func1} to={"/product"}>
              Product
              <div>
                <FiChevronDown />
              </div>
            </Nav>
          )}
          {show2 ? (
            <Nav onClick={func2} bg={show2 ? "lavender" : ""} to="">
              For teams
              <div>
                <FiChevronDown />
              </div>
            </Nav>
          ) : (
            <Nav onClick={func2} bg={show2 ? "" : ""} to="">
              For teams
              <div>
                <FiChevronDown />
              </div>
            </Nav>
          )}
          <Nav onClick={func3} bg={show3 ? "lavender" : ""} to="">
            Support
            <div>
              <FiChevronDown />
            </div>
          </Nav>
        </Right>
        <Left>
          <Button>Try now</Button>
          <Navleft>
            <p> Buy now</p>
            <Search>
              <BiSearch />
            </Search>
          </Navleft>
          <Navleft1>
            <Profile>
              <MdAccountCircle />
            </Profile>
            <span>My account</span>
            <Down>
              <FiChevronDown />
            </Down>
          </Navleft1>
        </Left>
      </Wrapper>

      {show2 ? (
        <Navwrap>
          <Navprops
            choice=""
            pchoice=""
            button="View all products"
            hg="420"
            Span3=""
            Span1="by team size"
            Span2="by team function"
            span1="Startups"
            p1="great for startups, from incubator to IPO"
            span2="Small business"
            p2="get the right tools for your growing business"
            span3="Enterprice"
            p3="Learn how we make big teams succcessful"
            span4="Software"
            p4="Plan, build, & ship, quality products"
            span5="marketing"
            p5="Bring together a winning strategy"
            span6="HR"
            p6="Stramline people management"
            span7="Legal"
            p7="Operate securely and reliably"
            span8="Opration"
            p8="Run your business efficiently"
            span9="IT"
            p9="Provide great service and support"
            span10="Finance"
            p10="Simplify all finance process"
            span11="Incident Response"
            p11="Respond, resolve, & learn incidents"
            span12="Marketplace"
            p12="Apps that enhance Atlassian product"
            span13="Developers"
            p13="Docs and resources to build Atlassian"
            span14="Trust & secutity"
            p14="compliance, privacy, platform roadmap, and more"
            span15="Work Life blog"
            p15="Stories on culture, tech, tearms, and tips"
          />
          <Cancel onClick={func2}>x</Cancel>
        </Navwrap>
      ) : null}

      {show3 ? (
        <Navwrap>
          <Navprops
            button=""
            Span3="learn & connect"
            hg="377"
            Span1="resources"
            Span2="support serices"
            span1="Documentation"
            p1="Guildes to all of our product"
            span2="Atlassian Migration Program"
            p2="Tools and guidance for migrating"
            span3="Colud roadmap"
            p3="Upcoming features releases"
            choice="Purchasing & licensing"
            pchoice="FAQs about our policies"
            span4="Enterprise service"
            p4="Personal support for large teams"
            span5="Pathner support"
            p5="Trusted third-party consultants"
            span6="Atlassian Support"
            p6="A resource hub teams and admins"
            span7=""
            p7=""
            span8="About us"
            p8="Our mission and history"
            span9="Careers"
            p9="Job openings, values, and more"
            span10="Atlassian University"
            p10="Training and certifications for all skill levels"
            span11="Atlassian Community"
            p11="A forum for connecting, sharing, and learning"
            span12="Marketplace"
            p12="Apps that enhance Atlassian product"
            span13="Developers"
            p13="Docs and resources to build Atlassian"
            span14="Trust & secutity"
            p14="compliance, privacy, platform roadmap, and more"
            span15="Work Life blog"
            p15="Stories on culture, tech, tearms, and tips"
          />
          <Cancel onClick={func3}>x</Cancel>
        </Navwrap>
      ) : null}
    </Container>
  );
};

export default Header;

const Cancel = styled.div`
  text-decoration: none;
  position: absolute;
  top: 10%;
  right: 5%;
  font-weight: 700;
  cursor: pointer;
  color: rgb(66, 82, 110, 0.8);
`;

const Navwrap = styled.div`
  position: absolute;
  border-top: 1px solid rgb(0, 0, 0, 0.1);
  top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const Profile = styled.div`
  color: rgb(0, 0, 0, 0.5);
  font-size: 20px;
  display: flex;
  margin-right: 10px;
  margin-left: 12px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    border-radius: 50%;
    color: gray;
  }
`;
const Search = styled.div`
  color: rgb(0, 0, 0, 0.5);
  font-size: 20px;
  display: flex;
  margin-right: 10px;
  margin-left: 12px;
  justify-content: center;

  border-radius: 50%;
  padding: 5px;
  :hover {
    background-color: lavender;
  }
  align-items: center;
  cursor: pointer;
`;
const Down = styled.div`
  color: rgb(0, 0, 0, 0.5);
  font-size: 15px;
  display: flex;
  color: blue;
  margin-left: 3px;
  margin-top: 3px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div<{ bg: string }>`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: container infinite 3ms linear;

  border-bottom: ${(bg) => bg.bg}; ;
`;
const Wrapper = styled.div`
  width: 84%;
  height: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  height: 24px;
  cursor: pointer;
  margin-right: 15px;
`;
const Nav = styled(NavLink)<{ bg: string }>`
  display: flex;
  transition: all 350ms;
  font-weight: 500;
  color: rgb(0, 0, 0, 0.5);
  text-decoration: none;

  div {
    color: rgb(0, 82, 204, 0.6);
    margin-top: 3px;
    margin-left: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  transition: all 350ms;

  background-color: ${(bg) => bg.bg};
  margin-left: 3px;
  cursor: pointer;
  padding: 3px 13px;
  border-radius: 5px;
  :hover {
    background-color: lavender;
  }
`;
const Left = styled.div`
  margin-right: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`;
const Button = styled.button`
  padding: 0px 14px;
  height: 30px;
  margin-right: 1px;
  border: 0;
  transition: all 350ms;

  :hover {
    background-color: #0c4daf;
  }
  outline: none;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  background-color: rgb(0, 82, 204);
  cursor: pointer;
`;
const Navleft = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: blue;

  p {
    padding: 3px 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    border-radius: 5px;
    transition: all 350ms;
    :hover {
      background-color: lavender;
    }
  }

  cursor: pointer;

  span {
    color: blue;
    font-weight: 600;
    font-size: 14px;
  }
`;
const Navleft1 = styled.nav`
  display: flex;
  border-left: 1px solid rgb(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: blue;
  height: 30px;
  padding: 2px 2px;
  :hover {
    background-color: lavender;
  }
  p {
    padding: 3px 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    border-radius: 5px;
    transition: all 350ms;
    :hover {
      background-color: lavender;
    }
  }

  cursor: pointer;

  span {
    color: blue;
    font-weight: 600;
    font-size: 14px;
  }
`;
