import React, { useState } from "react";
import styled from "styled-components";

const ColorPicker = ({ color, setColor }) => {
  const [showColors, setShowColors] = useState(false);
  const colorOptions = [
    "#99cc99",
    "#6699cc",
    "#cc99cc",
    "#f99157",
    "#66cccc",
    "#cc99cc",
    "#ffe644",
    "#f2777a"
  ];

  const handlePickColor = pickedColor => {
    setColor(pickedColor);
    setShowColors(false);
  };

  return (
    <Wrapper>
      <PickedColor
        onClick={() => setShowColors(!showColors)}
        background={color}
      >
        Pick A Color
      </PickedColor>
      {showColors && (
        <ColorOptions>
          {colorOptions.map(color => {
            return (
              <PickedColor
                background={color}
                onClick={() => handlePickColor(color)}
              ></PickedColor>
            );
          })}
        </ColorOptions>
      )}
    </Wrapper>
  );
};

export default ColorPicker;

const ColorOptions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  left: 0;
`;

const PickedColor = styled.div`
  width: 300px;
  height: 50px;
  background: ${props => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  font-weight: 900;
  letter-spacing: 2px;
  cursor: pointer;
  border: 1px solid ${props => props.background};
  border-radius: 2px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
