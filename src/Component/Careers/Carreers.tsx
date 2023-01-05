import React from "react";
import styled from "styled-components";
import img1 from "../Asset/career.webp";
import img2 from "../Asset/carreer1.webp";

const Carreers = () => {
  return (
    <Container>
      <Imagewrapperr>
        <Image src={img1} />
      </Imagewrapperr>
      <Mid>
        <h6>CAREERS</h6>
        <span>We can’t do it alone</span>
        <p>
          We have an ambitious road ahead, and we’re looking for people to join{" "}
          <br />
          our global team to help shape the future of Atlassian.
        </p>
        <button>Join the team</button>
      </Mid>
      <Imagewrapperl>
        <Image src={img2} />
      </Imagewrapperl>
    </Container>
  );
};

export default Carreers;

const Container = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 400px;
  position: relative;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Imagewrapperr = styled.div`
  height: 400px;
  position: absolute;
  left: -13%;
`;
const Imagewrapperl = styled.div`
  height: 400px;
  position: absolute;
  right: -12.5%;
`;
const Mid = styled.div`
  width: 60%;
  z-index: 1;
  h6 {
    color: #008da6;
    font-size: 17px;
    font-weight: 700;
    margin: 0;
  }

  span {
    font-size: 40px;
    font-weight: 700;
    color: #253858;
    text-align: center;
  }

  p {
    color: rgb(0, 0, 0, 0.7);
    font-weight: 500;
    font-size: 20px;
  }

  button {
    border: 0;
    outline: none;
    background-color: #0052cc;
    padding: 14px 24px;
    font-size: 15px;
    font-weight: 550;
    color: white;
    cursor: pointer;
    border-radius: 2px;
    transition: all 350ms;

    :hover {
      background-color: #054db9;
    }
  }
`;
