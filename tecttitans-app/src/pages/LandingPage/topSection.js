import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import './Landing.css';
import '../../App.css'

const ExploreButton = styled.button`
  outline: none;
  background-color: #00ff7b9c;
  backdrop-filter: blur(2px);
  color: #fff;
  font-size: 24px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
  font-weight: 700;
  border-radius: 16px;
  padding: 18px 3em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 250ms ease-in-out;

  &:hover {
    box-shadow: 0 0 20px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;
    border: 2px solid #00d7c3;
    
  }
`;

const LoopingTypingHeading = ({ texts }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
      const intervalId = setInterval(() => {
          setTextIndex((textIndex + 1) % texts.length);
      }, 2000);

      return () => clearInterval(intervalId);
  }, [textIndex, texts.length]);

  useEffect(() => {
      const typingIntervalId = setInterval(() => {
          const textToType = texts[textIndex];
          const newText = textToType.substring(0, currentText.length +1);
          setCurrentText(newText);

          if (newText === textToType) {
              clearInterval(typingIntervalId);

              // Start the 10-second timeout
              setTimeout(() => {
                  setCurrentText('T');
              }, 10000);
          }
      }, 100);

      return () => clearInterval(typingIntervalId);
  }, [currentText, textIndex, texts]);

  return (
      <h1 className="typing-heading">
          {currentText}
          <span className="typing-cursor">|</span>
      </h1>
  );
};


export function TopSection() {
    const texts = ['TechTitans Virtual Sustainable Tour'];
    const history = useNavigate();

    const handleExploreClick = () => {
        // Redirect to the desired page when the button is clicked
        history("/tour");
    };

    return (
        <div className= 'topSectionContainer' data-tilt>
          <LoopingTypingHeading texts={texts} />
          <p>Experience Brisbane Sustainability from your own couch</p>
          <ExploreButton onClick={handleExploreClick}>Explore Tour </ExploreButton>
        </div>
    );
}