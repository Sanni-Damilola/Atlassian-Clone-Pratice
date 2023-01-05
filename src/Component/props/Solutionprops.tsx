import React from "react";
import styled from "styled-components";
import { HiArrowLongRight } from "react-icons/hi2";
import Featuredprops from "./Featuredprops";

interface props {
  hg: number;
  span1: string;
  p1: string;
  span2: string;
  p2: string;
  span3: string;
  p3: string;
  img1: string;
  img2: string;
  img3: string;
  bg: string;
  wd: number;
  hgg: number;
  disp1: string;
  disp2: string;
  disp3: string;
  jc: string;
  sa: string;
  image: string;
  leftspan: string;
  buttonspan: string;
  view: number;
  leftspanwidth: number;
}

const Solutionprops: React.FC<props> = ({
  jc,
  image,
  sa,
  disp1,
  disp2,
  disp3,
  hgg,
  wd,
  hg,
  span1,
  p1,
  span2,
  p2,
  span3,
  p3,
  img1,
  img2,
  img3,
  bg,
  leftspan,
  buttonspan,
  view,
  leftspanwidth,
}) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Leftspan leftspanwidth={leftspanwidth}>{leftspan}</Leftspan>
          <View view={view}>
            <span>{buttonspan}</span>
            <br />
            <br />
            <br />
            <br />
            <Icon>
              <HiArrowLongRight />
            </Icon>
          </View>
          <Wrap sa={sa} jc={jc}>
            <Hold1 disp1={disp1}>
              <Wrap2 wd={wd} hgg={hgg} bg={bg}>
                <Img hg={hg} src={img1} />
              </Wrap2>
              <Text>
                <Span>{span1}</Span>
                <P>{p1}</P>
              </Text>
            </Hold1>
            <Hold2 disp2={disp2}>
              <Wrap2 wd={wd} hgg={hgg} bg={bg}>
                <Img hg={hg} src={img2} />
              </Wrap2>
              <Text>
                <Span>{span2}</Span>
                <P>{p2}</P>
              </Text>
            </Hold2>
            <Hold3 disp3={disp3}>
              <Wrap2 wd={wd} hgg={hgg} bg={bg}>
                <Img hg={hg} src={img3} />
              </Wrap2>
              <Text>
                <Span>{span3}</Span>
                <P>{p3}</P>
              </Text>
            </Hold3>
          </Wrap>
        </Left>
        <Image src={image} />
      </Wrapper>
    </Container>
  );
};

export default Solutionprops;

const Hold1 = styled.div<{ disp1: string }>`
  display: ${({ disp1 }) => (disp1 ? "flex" : "none")};
  width: 350px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-bottom: 40px;
`;
const Hold2 = styled.div<{ disp2: string }>`
  display: ${({ disp2 }) => (disp2 ? "flex" : "none")};
  width: 300px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-bottom: 40px;
`;
const Hold3 = styled.div<{ disp3: string }>`
  display: ${({ disp3 }) => (disp3 ? "flex" : "none")};
  width: 340px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Imagwrap = styled.div``;

const Wrap2 = styled.div<{ bg: string; wd: number; hgg: number }>`
  width: ${(wd) => wd.wd}px;
  height: ${(hg) => hg.hgg}px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  border-radius: 4px;
  background-color: ${(bg) => bg.bg};
`;
const Img = styled.img<{ hg: number }>`
  height: ${(props) => props.hg}px;
`;
const Text = styled.div`
  width: 70%;
`;

const Span = styled.div`
  margin: 0;
  font-weight: 650;
  font-size: 18px;
  color: rgb(0, 0, 0, 0.8);
`;

const P = styled.p`
  margin: 0;
  font-size: 16px;
  color: rgb(0, 0, 0, 0.8);
  font-weight: 600;
`;

const Wrap = styled.div<{ jc: string; sa: string }>`
  flex-direction: column;
  display: flex;
  justify-content: ${({ jc }) => (jc ? "center" : "")};
  height: 240px;
  justify-content: ${({ sa }) => (sa ? "space-around" : "")};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  justify-content: center;
  /* align-items: center; */
`;
const Left = styled.div`
  margin-left: 80px;
  margin-top: 70px;
`;

const Leftspan = styled.div<{ leftspanwidth: number }>`
  width: ${(props) => props.leftspanwidth}%;
  text-align: left;
  font-weight: 500;
  color: rgb(37, 56, 88);
  font-size: 24px;
`;
const Image = styled.img`
  height: 650px;
  object-fit: contain;
  margin-top: 80px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: blue;
  margin-top: 4px;
  margin-left: 8px;
`;

const View = styled.div<{ view: number }>`
  display: flex;

  align-items: center;
  cursor: pointer;
  span {
    font-weight: 500;
    font-size: 16px;
  }
  color: #4a84db;
  :hover {
    text-decoration: underline;
    justify-content: space-between;
  }
  width: ${(view) => view.view}%;
`;
