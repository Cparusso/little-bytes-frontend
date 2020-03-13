import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutWrapper>
      {/* <Section>
        <SectionHeader>Who Are We</SectionHeader>
        <CompanyPhoto src="me.png" />
        <CompanyDesc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </CompanyDesc>
      </Section> */}
      <Section>
        <SectionHeader>Meet The Team</SectionHeader>
        <Employees>
          <Card>
            <CardImage src="me.png" />
            <EmployeeInfo>
              <Employee>
                <EmployeeName>Charlie Russo</EmployeeName>
                <Position>Co-Founder</Position>
              </Employee>
              <EmployeeLinks>
                <p>o</p>
                <p>o</p>
              </EmployeeLinks>
            </EmployeeInfo>
            {/* <EmployeeDesc>
              Charlie is stupid Charlie is stupid Charlie is stupid. Charlie is
              Dumb. Charlie is stupid and dumb and not smart. Charlie is stupid
              Charlie is stupid Charlie is stupid. Charlie is Dumb. Charlie is
              stupid and dumb and not smart.
            </EmployeeDesc> */}
          </Card>
          <Card>
            <CardImage src="me.png" />
            <EmployeeInfo>
              <Employee>
                <EmployeeName>Mike Schwartz</EmployeeName>
                <Position>Co-Founder</Position>
              </Employee>
              <EmployeeLinks>
                <p>o</p>
                <p>o</p>
              </EmployeeLinks>
            </EmployeeInfo>
            {/* <EmployeeDesc>
              Charlie is stupid Charlie is stupid. Charlie is Dumb. Charlie is
              not smart.
            </EmployeeDesc> */}
          </Card>
          <Card>
            <CardImage src="me.png" />
            <EmployeeInfo>
              <Employee>
                <EmployeeName>Miriam Frank</EmployeeName>
                <Position>Co-Founder</Position>
              </Employee>
              <EmployeeLinks>
                <p>o</p>
                <p>o</p>
              </EmployeeLinks>
            </EmployeeInfo>

            {/* <EmployeeDesc>
              Charlie is stupid Charlie is stupid. Charlie is Dumb. Charlie is
              stupid and dumb and not smart.
            </EmployeeDesc> */}
          </Card>
        </Employees>
      </Section>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionHeader = styled.h1`
  font-size: 50px;
`;

const CompanyPhoto = styled.img`
  width: 600px;
  height: 300px;
`;

const CompanyDesc = styled.h4`
  width: 80%;
`;

const Employees = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
`;

const CardImage = styled.img`
  width: 200px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 350px;
  padding: 20px 0px 5px 0px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  background: #ffe644;

  /* background: -webkit-linear-gradient(90deg, #fff 70%, #ffe644 70%);
  background: -o-linear-gradient(90deg, #fff 70%, #ffe644 70%);
  background: -moz-linear-gradient(90deg, #fff 70%, #ffe644 70%);
  background: linear-gradient(90deg, #fff 70%, #ffe644 70%); */
  /* 
  background: -webkit-linear-gradient(180deg, #262725 68%, rgba(0, 0, 0, 0) 33%),
    -webkit-linear-gradient(90deg, #fff 66%, #ffe644 66%);
  background: -o-linear-gradient(180deg, #262725 68%, rgba(0, 0, 0, 0) 33%),
    -o-linear-gradient(90deg, #fff 66%, #ffe644 66%);
  background: -moz-linear-gradient(180deg, #262725 68%, rgba(0, 0, 0, 0) 33%),
    -moz-linear-gradient(90deg, #fff 66%, #ffe644 66%);
  background: linear-gradient(180deg, #262725 68%, rgba(0, 0, 0, 0) 33%),
    linear-gradient(90deg, #fff 66%, #ffe644 66%); */
`;

const EmployeeInfo = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

const Employee = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
`;

const EmployeeName = styled.h1`
  margin-bottom: 0;
  width: 70%;
`;

const Position = styled.h4`
  margin: 0;
`;

const EmployeeLinks = styled.div`
  margin-bottom: 0;
  width: 20%;
`;

// const EmployeeDesc = styled.p`
//   overflow: scroll;
//   width: 75%;
// `;
