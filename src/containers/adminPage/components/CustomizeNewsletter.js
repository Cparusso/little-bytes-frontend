import React, { useState } from "react";
import styled from "styled-components";

const CustomizeNewsletter = ({ numOfQuestions, setNumOfQuestions }) => {
  const [showList, setShowList] = useState(false);
  const options = [1, 2, 3, 4, 5, 6];

  const handleShowList = () => {
    setShowList(true);
  };

  const handleNumberChoice = option => {
    setShowList(false);
    setNumOfQuestions(option);
  };

  return (
    <MainContainer>
      <CurrentNumber onClick={handleShowList}>
        {numOfQuestions || 1}
      </CurrentNumber>
      {showList && (
        <NumbersContainer>
          {options.map(option => (
            <Number key={option} onClick={() => handleNumberChoice(option)}>
              {option}
            </Number>
          ))}
        </NumbersContainer>
      )}
    </MainContainer>
  );
};

export default CustomizeNewsletter;

const CurrentNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const NumbersContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
