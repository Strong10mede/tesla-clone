import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
function Section({
  title,
  description,
  leftbtntext,
  rightbtntext,
  backgroundimg,
}) {
  return (
    <Wrap bgimage={backgroundimg}>
      <ItemText>
        <Fade bottom>
          <h1>{title}</h1>
          <p>{description}</p>
        </Fade>
      </ItemText>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftbtntext}</LeftButton>
            {rightbtntext && <RightButton>{rightbtntext}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgimage}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  height: 40px;
  width: 256px;
  background-color: rgba(23, 26, 32, 0.8);
  border-radius: 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  color: black;
  background: white;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.54s;
`;

const Buttons = styled.div``;
