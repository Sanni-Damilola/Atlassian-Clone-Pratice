import React from "react";
import styled from "styled-components";

interface props {
    button: string;
  Span1: string;
  span1: string;
  p1: string;
  Span2: string;
  Span3: string;
  span2: string;
  p2: string;
  span3: string;
  p3: string;
  span4: string;
  p4: string;
  span5: string;
  p5: string;
  span6: string;
  p6: string;
  span7: string;
  p7: string;
  span8: string;
  p8: string;
  span9: string;
  p9: string;
  span10: string;
  p10: string;
  span11: string;
  p11: string;
  span12: string;
  p12: string;
  span13: string;
  p13: string;
  span14: string;
  p14: string;
  span15: string;
  p15: string;
  hg: string;
  choice : string,
  pchoice : string
}

const Navprops: React.FC<props> = ({
  span1,
  Span2,
  Span1,
  Span3,
  span2,
  span3,
  span4,
  span5,
  span6,
  span7,
  span8,
  span9,
  span10,
  span11,
  span12,
  span13,
  span14,
  span15,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  hg,
  button,
  choice,
  pchoice
}) => {
  return (
    <Container hg={hg}>
      <Div>
        <Span>{Span1}</Span> <br />
        <br />
        <Wrap>
          <span>{span1}</span>
          <p>{p1}</p>
        </Wrap>
        <Wrap>
          <span>{span2}</span>
          <p>{p2}</p>
        </Wrap>
        <Wrap>
          <span>{span3}</span>
          <p>{p3}</p>
        </Wrap>
        <Wrap>
          <span>{choice}</span>
          <p>{pchoice}</p>
        </Wrap>
        <br />
        <br />
        <br />
        <br />
        <Button>{button}</Button>
      </Div>
      <Div>
        <Span>{Span2}</Span> <br />
        <br />
        <Wrap>
          <span>{span4}</span>
          <p>{p4}</p>
        </Wrap>
        <Wrap>
          <span>{span5}</span>
          <p>{p5}</p>
        </Wrap>
        <Wrap>
          <span>{span6}</span>
          <p>{p6}</p>
        </Wrap>
        <Wrap>
          <span>{span7}</span>
          <p>{p7}</p>
        </Wrap>
      </Div>
      <Div>
        <Span>{Span3}</Span> <br />
        <br />
        <Wrap>
          <span>{span8}</span>
          <p>{p8}</p>
        </Wrap>
        <Wrap>
          <span>{span9}</span>
          <p>{p9}</p>
        </Wrap>
        <Wrap>
          <span>{span10}</span>
          <p>{p10}</p>
        </Wrap>
        <Wrap>
          <span>{span11}</span>
          <p>{p11}</p>
        </Wrap>
      </Div>
      <Right>
        <Rightspan>{span12}</Rightspan> <br />
        <p>{p12}</p>
        <br />
        <Rightp>
          <span>{span13}</span>
          <p>{p13}</p>
        </Rightp>
        <hr />
        <Rightp>
          <span>{span14}</span>
          <p>{p14}</p>
        </Rightp>
        <hr />
        <Rightp>
          <span>{span15}</span>
          <p>{p15}</p>
        </Rightp>
      </Right>
    </Container>
  );
};

export default Navprops;

const Container = styled.div<{ hg: string }>`
  width: 87%;
  height: ${(hg) => hg.hg}px;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
`;

const Span = styled.span`
  font-weight: 500;
  font-size: 13px;
  color: rgb(66, 82, 110);
  text-transform: uppercase;
`;
const Rightspan = styled.span`
  font-weight: 500;
  font-size: 13px;
  color: rgb(66, 82, 110);
  text-transform: uppercase;
  margin-left: 23px;
`;
const Div = styled.div``;
const Right = styled.div`
  border-left: 1px solid rgb(0, 0, 0, 0.1);
  height: 94%;
  position: relative;

  hr {
    margin-top: 20px;
    margin-bottom: 25px;
    margin-left: 24px;
    width: 25%;
  }
  p {
    color: rgb(66, 82, 110, 0.8);
    font-size: 12px;
    margin: 0;
    margin-top: 2px;
    font-weight: 500;
    margin-left: 23px;
  }
`;
const Wrap = styled.div`
  padding-bottom: 15px;
  span {
    font-weight: 500;
    font-size: 15px;
    color: rgb(66, 82, 110);
  }
  cursor: pointer;
  :hover {
    span {
      color: rgb(38, 132, 255);
    }
  }

  p {
    color: rgb(66, 82, 110, 0.8);
    font-size: 12px;
    margin: 0;
    margin-top: 2px;
    font-weight: 500;
  }
`;
const Rightp = styled.div`
  padding-bottom: 10px;
  margin-left: 23px;
  padding-top: 10px;
  span {
    font-weight: 500;
    font-size: 15px;
    color: rgb(66, 82, 110);
  }
  cursor: pointer;
  :hover {
    span {
      color: rgb(38, 132, 255);
    }
  }

  p {
    color: rgb(66, 82, 110, 0.8);
    font-size: 12px;
    margin: 0;
    margin-top: 2px;
    font-weight: 500;
  }
`;

const Button = styled.div`
  color: rgb(0, 0, 0, 0.5);
  cursor: pointer;
  font-size: 14px;
  transition: all 350ms;
  font-weight: 500;
  :hover {
    text-decoration: underline;
  }
`;
