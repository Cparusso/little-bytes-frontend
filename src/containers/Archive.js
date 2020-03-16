import React, { useState } from "react";
import styled from "styled-components";

import Byte from "../components/Byte.js";

const Archive = () => {
  const [filterBy, setFilterBy] = useState("");

  return (
    <ArchiveWrapper>
      <HeaderWrapper>
        <Header>Archive</Header>
        <FilterSearch
          placeholder="Filter by title or tags..."
          type="text"
          value={filterBy}
          onChange={event => setFilterBy(event.target.value)}
        />
      </HeaderWrapper>
      <BytesContainer>
        <Byte cta="Paramaters vs arguments" issueNum={9} date="April 01 2020" />
        <Byte
          cta="Regular function vs arrow functions"
          issueNum={8}
          date="April 02 2020"
        />
        <Byte cta="Declaring a function" issueNum={7} date="April 03 2020" />
        <Byte cta="Null vs undefined" issueNum={6} date="April 04 2020" />
        <Byte cta="Declaring vs assigning" issueNum={5} date="April 05 2020" />
        <Byte
          cta="Vars lets and consts, oh my"
          issueNum={4}
          date="April 06 2020"
        />
        <Byte cta="Commenting your code" issueNum={3} date="April 07 2020" />
        <Byte cta="JavaScript statements" issueNum={2} date="April 08 2020" />
        <Byte
          cta="Understand hoisiting in javascript"
          issueNum={1}
          date="April 09 2020"
        />
      </BytesContainer>
    </ArchiveWrapper>
  );
};

export default Archive;

const ArchiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  color: #262725;
  width: 100vw;
  position: relative;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Header = styled.h1`
  font-size: 50px;
  margin: 0;
  padding: 10px;
`;

const FilterSearch = styled.input`
  background: white;
  color: gray;
  height: 30px;
  font-size: 24px;
  margin-top: 5px;
  overflow: show;
  border: none;
  width: 0px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  padding-left: 45px;
  background: url("search.svg") no-repeat;
  background-size: 32px 32px;
  &:focus {
    width: 17%;
    outline: none;
    @media (max-width: 768px) {
      width: 10%;
    }
  }
`;

const BytesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 92vh;
  overflow: scroll;
  width: 100vw;
`;
