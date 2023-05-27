import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import './TopSection.css';
import '../../App.css'

const ExploreButton = styled.button`
    background-color: #00ff7b9c;
    backdrop-filter: blur(2px);
    border: 2px solid transparent;
    
    border-radius: 36px;
    padding: 18px 3em;
    width: fit-content;
    
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: white;
    font-size: 24px;
    font-weight: 700;

    cursor: pointer;
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
              }, 1000);
          }
      }, 100);

      return () => clearInterval(typingIntervalId);
  }, [currentText, textIndex, texts]);

  return (
      <h1><center>{currentText}</center></h1>
  );
};


export function TopSection() {

    const desc = [
        "ESG scores assess a company's performance and impact in areas related to the environment, society, and governance (ESG).",
        "First, the average ratios for key environmental metrics such as green house gas emissions, water withdrawal, water discharge and operating income across companies in the industry are determined. These ratios serve as benchmarks for comparison.",
        "Then, a normalized score for each metric based on its impact on the company's performance and the industry's average performance is calculated. In addition to the previously described metrics, emissions like SOx, NOx, and VOC are also taken into account.",
        "Weights are assigned to each metric to reflect its importance. The normalized scores for each metric are multiplied by their respective weights, and the weighted scores are summed up to obtain an overall ESG score for the company. This score is rounded, multiplied by a normalization factor, and returned as the final result."
    ]

    const header = ['TechTitans Virtual Sustainablility Tour'];
    const ESGtext = ['How Do We Rate Sustainability?'];
    const history = useNavigate();

    const handleExploreClick = () => {
        // Redirect to the desired page when the button is clicked
        history("/tour");
    };

    return (
        <div className='contentContainer' >
            <div className ='title'>
                <LoopingTypingHeading texts={header} />
                <p><center>Experience Brisbane's sustainability from the comfort of your own couch</center></p>
            </div>

            <div className='buttonContainer'>
                <ExploreButton onClick={handleExploreClick}> Explore Tour </ExploreButton>
            </div>

            <div className ='ESG'>
                <LoopingTypingHeading texts={ESGtext} />
                <EnergySavingsLeafIcon htmlColor="LimeGreen" sx={{ fontSize: '50px' }} />
                {desc.map((para) => <p><center>{para}</center></p>)}
            </div>
        </div>
    );
}