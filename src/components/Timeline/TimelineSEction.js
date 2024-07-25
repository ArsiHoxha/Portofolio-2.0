import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import 'tailwindcss/tailwind.css';

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

const TimelineContainer = styled.div`
  position: absolute;
  width: 60%;
  height: 80%;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 98;
  background: rgba(255, 255, 255, 0.1); /* Transparent background */
  border-radius: 10px;
  padding: 2rem;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 80%;
`;

const TimelineDot = styled.div`
  background-color: #27b927;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 1rem;
  position: relative;
`;

const VerticalLine = styled.div`
  position: absolute;
  width: 2px;
  background-color: #27b927;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;

export function TimelineSection() {
  return (
    <>
      <TimelineContainer>
        <TimelineItem>
          <TimelineDot>1</TimelineDot>
          <TimelineContent>
            <h3 className="text-lg font-bold">Step 1</h3>
            <p className="text-sm">Description for step 1.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineDot>2</TimelineDot>
          <TimelineContent>
            <h3 className="text-lg font-bold">Step 2</h3>
            <p className="text-sm">Description for step 2.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineDot>3</TimelineDot>
          <TimelineContent>
            <h3 className="text-lg font-bold">Step 3</h3>
            <p className="text-sm">Description for step 3.</p>
          </TimelineContent>
        </TimelineItem>
        {/* Add more timeline items as needed */}
      </TimelineContainer>
    </>
  );
}
