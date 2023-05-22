import React from 'react';
import './Landing.css';
import {Earth} from "../../components/earth";
import styled from "styled-components";
import {Canvas } from "@react-three/fiber";
import {Suspense} from "react";
import {TopSection} from "./TopSection/topSection";


const CanvasContainer = styled.div `
  width: 100vw;
  height: 90vh;
`;
function Landing() {
    return (
        <CanvasContainer>
            <TopSection />
            <Canvas>
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </CanvasContainer>
    );
}
export default Landing;