import React from "react";
import styled from "styled-components";

interface props {
  hg: number;
  span: string;
  p: string;
  img: string;
  bg: string;
}

const Featuredprops: React.FC<props> = ({ hg, span, p, img, bg }) => {
  return (
    <Container>
      <Wrap bg={bg}>
        <Img hg={hg} src={img} />
      </Wrap>
      <Text>
        <Span>{span}</Span>
        <P>{p}</P>
      </Text>
    </Container>
  );
};

export default Featuredprops;

const Container = styled.div`
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Wrap = styled.div<{ bg: string }>`
  width: 49px;
  height: 48px;
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

const Span = styled.span`
  margin: 0;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 15px;
  color: #15294b;
`;

const P = styled.p`
  margin: 0;
  font-size: 12px;
  color: rgb(0, 0, 0, 0.5);
  font-weight: 600;
`;
