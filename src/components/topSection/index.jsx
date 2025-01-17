import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 60%;
  height: 10%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 99;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 80px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  color: #fff;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 80%;
`;

const DonateButton = styled.button`
  outline: none;
  border: none;
  background-color: #27b927;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 12px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #27b927;
  }
`;

const MadeBy = styled.h3`
  color: #fff;
  position: fixed;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <Logo>Arsi Hoxha</Logo>
      <Slogan>
        <Typewriter
          options={{
            strings: ["Web Developer", "Machine Learning Enthusiast", "AI Learner","Full-Stack Developer", "Unity Game Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </Slogan>
    </TopSectionContainer>
  );
}
