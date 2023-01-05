import React from "react";
import styled from "styled-components";
import { AiFillPlayCircle } from "react-icons/ai";
import image1 from "../Asset/kiva.webp";
import image2 from "../Asset/kiva.webp";
import image3 from "../Asset/redfin.webp";
import image4 from "../Asset/nasa.webp";
import image5 from "../Asset/audi.webp";
import image6 from "../Asset/castlight.webp";
import video from "../Video/VID_20220924_190626.mp4";
import { NavLink } from "react-router-dom";

const Video = () => {
  const [show, setshow] = React.useState<boolean>(false);
  const [showremove, setshowremove] = React.useState<boolean>(false);

  const func = () => {
    setshow(!false);
  };

  const funremove = () => {
    setshow(false);
  };

  return (
    <Container>
      <Span>Join the teams that achieve the impossible every day</Span>
      <Videowrapper onClick={func}>
        <div>
          <AiFillPlayCircle />
        </div>
        <span>Watch a customer story</span>
      </Videowrapper>
      <br />
      <Imagwrapper>
        <Image src={image1} />
        <Image src={image2} />
        <Image src={image3} />
        <Image2 src={image4} />
        <Image src={image5} />
        <Image src={image6} />
      </Imagwrapper>
      {show ? (
        <Wrap>
          <Videoplay src={video} autoPlay={true} loop controls />
        </Wrap>
      ) : null}

      {show ? <Cancel onClick={funremove}>X</Cancel> : null}
      
    </Container>
  );
};

export default Video;

const Videoplay = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Wrap = styled.div`
  position: absolute;
  width: 80%;
  top: -320px;
  height: 550px;
  z-index: 1;
`;

const Cancel = styled.div`
  position: absolute;
  top: -340px;
  font-weight: 800;
  right: 8.5%;
  font-size: 20px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Span = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: rgb(0, 0, 0, 0.9);
  margin-bottom: 10px;
`;
const Videowrapper = styled.div`
  position: relative;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    color: #2727f5;
    font-weight: 500;
    font-size: 17px;
  }

  div {
    display: flex;
    color: #2727f5;
    justify-content: center;
    align-items: center;
    margin-top: 4px;
    margin-right: 6px;
    font-size: 23px;
  }

  transition: all 350ms;

  :hover {
    div {
      background-color: transparent;
      color: transparent;
    }
  }
`;
const Imagwrapper = styled.div`
  width: 100%;
  background-color: #e2edff;
  display: flex;
  height: 200px;
  justify-content: center;
  justify-content: space-around;
`;
const Image = styled.img`
  object-fit: contain;
  height: 40px;
  margin-top: 40px;
`;
const Image2 = styled.img`
  object-fit: contain;
  margin: 0;
  height: 100px;
  margin-top: 20px;
`;
