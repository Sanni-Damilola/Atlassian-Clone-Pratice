import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import logo from "../Asset/logo.webp";
import {
  AiFillCaretDown,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";

import Global from "../Asset/globe.svg";

const Footer = () => {
  const [show, setshow] = React.useState<any>(0);

  const func = () => {
    setshow(show + 1);
  };

  const arr = ["none", "block"];

  const display: any = useRef();

  useEffect(() => {
    display.current.style.display = arr[show % arr.length];
  });

  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Navwrapper>
          <h6>PRODUCTS</h6>
          <br />
          <span>Jira Software</span> <br />
          <span>Jira Align</span> <br />
          <span>Jira Service Management</span> <br />
          <span>Confluence</span> <br />
          <span>Trello</span> <br />
          <span>Bitbucket</span> <br />
          <p>View all products</p>
        </Navwrapper>
        <Navwrapper>
          <h6>RESOURCES</h6>
          <br />
          <span>Technical Support</span> <br />
          <span>Purchasing & licensing</span> <br />
          <span>Atlassian Community</span> <br />
          <span>Knowledge base</span> <br />
          <span>Marketplace</span> <br />
          <span>My Account</span> <br />
          <p>Create support ticket</p>
        </Navwrapper>
        <Navwrapper>
          <h6>EXPAND & LEARN</h6>
          <br />
          <span>Partners</span> <br />
          <span>Training & Certification</span> <br />
          <span>Documentation</span> <br />
          <span>Developer Resources</span> <br />
          <span>Enterprise services</span> <br />
          <p>View all resources</p>
        </Navwrapper>
        <Navwrapper>
          <h6>ABOUT ATLASSIAN</h6>
          <br />
          <span>Company</span> <br />
          <span>Careers</span> <br />
          <span>Events</span> <br />
          <span>Blogs</span> <br />
          <span>Investor Relations</span> <br />
          <span>Trust & Security</span> <br />
          <p>Contact us</p>
        </Navwrapper>
      </Wrapper>
      <Wrap>
        <Dropdown onClick={func}>
          <Img src={Global} />
          English
          <AiFillCaretDown />
        </Dropdown>
        <p>Privacy policy</p>
        <p>Terms</p>
        <p>Modern Slavery Act</p>
        <p>Impressum</p>
        <pre>Copyright © 2022 Atlassian</pre>
        <Social>
          <Facebook>
            <AiFillFacebook />
          </Facebook>
          <Twitter>
            <AiOutlineTwitter />
          </Twitter>
          <Linkdin>
            <AiFillLinkedin />
          </Linkdin>
          <Youtube>
            <TiSocialYoutubeCircular />
          </Youtube>
        </Social>
      </Wrap>
      <Show ref={display}>
        <span>Choode your language</span>
        <nav>Yoruba</nav>
        <nav>English</nav>
        <nav>Igbo</nav>
        <nav>Hausa</nav>
        <nav>Deutsh</nav>
        <nav>Francais</nav>
        <nav>italiano</nav>
        <nav>Magyar</nav>
        <nav>Nederlands</nav>
        <nav>Polish</nav>
        <nav>Polski</nav>
        <nav>Portugues</nav>
      </Show>
    </Container>
  );
};

export default Footer;

const Show = styled.div`
  position: absolute;
  z-index: 1;
  top: 5%;
  background-color: white;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border: 1px solid rgb(0, 0, 0, 0.9);
  border-radius: 2px;
  left: 6%;
  transition: all 350ms;

  span {
    font-size: 14px;
    font-weight: 500;
    color: rgb(0, 0, 0, 0.7);
  }

  nav {
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: rgb(0, 0, 0, 0.7);

    :hover {
      background-color: #60a9dc;
    }
  }
`;

const Dropdown = styled.div`
  display: flex;
  margin-right: 30px;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  width: 110px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  color: rgb(0, 0, 0, 0.7);
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  align-items: center;
  border-top: 1px solid rgb(0, 0, 0, 0.2);

  p {
    cursor: pointer;
    font-size: 16px;
    color: rgb(0, 0, 0, 0.7);
    font-weight: 500;
    margin-right: 30px;

    :hover {
      text-decoration: underline;
    }
  }

  pre {
    margin-right: 190px;
    font-size: 14px;
    color: rgb(0, 0, 0, 0.7);
    font-weight: 400;
  }
`;
const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img``;
const Icon = styled.img`
  object-fit: contain;
  height: 10px;
`;
const Facebook = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3c5a99;
  font-size: 42px;
  cursor: pointer;
`;
const Linkdin = styled.div`
  font-size: 42px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: #016699;
  align-items: center;
`;
const Twitter = styled.div`
  cursor: pointer;
  color: #60a9dc;
  font-size: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Youtube = styled.div`
  cursor: pointer;
  display: flex;
  color: #42526e;
  font-size: 42px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f5f7;
  height: 350px;
  flex-wrap: wrap;
  position: relative;
`;
const Wrapper = styled.div`
  width: 80%;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
`;
const Logo = styled.img`
  height: 18px;
`;

const Navwrapper = styled.div`
  h6 {
    margin: 0;
    color: rgb(66, 82, 110);
    font-size: 14px;
    font-weight: 800;
  }

  span {
    line-height: 26px;
    color: rgb(0, 0, 0, 0.7);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    :hover {
      color: rgb(37, 56, 88);
      text-decoration: underline;
    }
  }

  p {
    :hover {
      text-decoration: underline;
    }
    cursor: pointer;
    font-size: 14px;
    color: rgb(0, 101, 255);
    font-weight: 400;
  }
`;
