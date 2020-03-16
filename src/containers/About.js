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
            <CardImage src="me.png" alt="employee headshot" />
            <EmployeeInfo>
              <Employee>
                <EmployeeName>Charlie Russo</EmployeeName>
                <Position>Co-Founder</Position>
              </Employee>
              <EmployeeLinks>
                <img src="linkedin.svg" height="25px" alt="linkedin" />
                <img src="github.svg" height="25px" alt="github" />
                <img src="mail.svg" height="25px" alt="email" />
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
            <CardImage src="me.png" alt="employee headshot" />
            <EmployeeInfo>
              <Employee>
                <EmployeeName>Mike Schwartz</EmployeeName>
                <Position>Co-Founder</Position>
              </Employee>
              <EmployeeLinks>
                <img src="linkedin.svg" height="25px" alt="linkedin" />
                <img src="github.svg" height="25px" alt="github" />
                <img src="mail.svg" height="25px" alt="email" />
              </EmployeeLinks>
            </EmployeeInfo>
            {/* <EmployeeDesc>
              Charlie is stupid Charlie is stupid. Charlie is Dumb. Charlie is
              not smart.
            </EmployeeDesc> */}
          </Card>
          <Card>
            <CardImage src="me.png" alt="employee headshot" />
            <EmployeeInfo>
              <Employee>
                <EmployeeName>Miriam Frank</EmployeeName>
                <Position>Co-Founder</Position>
              </Employee>
              <EmployeeLinks>
                <img src="linkedin.svg" height="25px" alt="linkedin" />
                <img src="github.svg" height="25px" alt="github" />
                <img src="mail.svg" height="25px" alt="email" />
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
  padding-top: 10px;
  padding-bottom: 40px;
  margin: 0;
`;

const Employees = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardImage = styled.img`
  width: 200px;
  border-radius: 4px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 350px;
  padding: 20px 0px 5px 0px;
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  /* background: #ffe644; */
  background: #fff;

  /* without grey */
  /* background: -webkit-linear-gradient(90deg, #fff 70%, #ffe644 70%);
  background: -o-linear-gradient(90deg, #fff 70%, #ffe644 70%);
  background: -moz-linear-gradient(90deg, #fff 70%, #ffe644 70%);
  background: linear-gradient(90deg, #fff 70%, #ffe644 70%); */

  /* with grey */
  /* background: -webkit-linear-gradient(180deg, #262725 50%, rgba(0, 0, 0, 0) 50%),
  -webkit-linear-gradient(90deg, #fff 66%, #ffe644 66%);
  background: -o-linear-gradient(180deg, #262725 50%, rgba(0, 0, 0, 0) 50%),
  -o-linear-gradient(90deg, #fff 66%, #ffe644 66%);
  background: -moz-linear-gradient(180deg, #262725 50%, rgba(0, 0, 0, 0) 50%),
  -moz-linear-gradient(90deg, #fff 66%, #ffe644 66%);
  background: linear-gradient(180deg, #262725 50%, rgba(0, 0, 0, 0) 50%),
  linear-gradient(90deg, #fff 66%, #ffe644 66%); */
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

const EmployeeInfo = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

const Employee = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 30px;
`;

const EmployeeName = styled.h1`
  margin-bottom: 0;
  width: 70%;
  margin: 0;
`;

const Position = styled.h4`
  margin: 0;
  padding: 5px;
  background: #ffe644;
  border-radius: 4px;
  width: 55%;
  font-style: italic;
  font-weight: 400;
`;

const EmployeeLinks = styled.div`
  width: 20%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// const EmployeeDesc = styled.p`
//   overflow: scroll;
//   width: 75%;
// `;
