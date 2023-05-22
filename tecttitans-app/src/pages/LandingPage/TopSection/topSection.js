import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(11, 32, 80, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13%;
  z-index: 99;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 50px;
  text-align: center;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  margin-top: 10px;
`;



const ExploreButton = styled.button`
  outline: none;
  background-color: #27b927;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #27b927;
  }
`;



export function TopSection() {
    const history = useNavigate();

    const handleExploreClick = () => {
        // Redirect to the desired page when the button is clicked
        history("/tour");
    };

    return (
        <TopSectionContainer>
            <Logo>TECHTITANS</Logo>
            <Logo>VIRTUAL SUSTAINABLE TOUR</Logo>
            <Slogan>Experience more green accommodation from the comfort of your couch</Slogan>

            <ExploreButton onClick={handleExploreClick}>Explore Tour</ExploreButton>

        </TopSectionContainer>
    );
}