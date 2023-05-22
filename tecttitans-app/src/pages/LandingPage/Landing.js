import React from 'react';
import './Landing.css';
import {Earth} from "../../components/earth";
import styled from "styled-components";
import {Canvas } from "@react-three/fiber";
import {Suspense} from "react";



const CanvasContainer = styled.div `
  width: 100vw;
  height: 90vh;
`;
function Landing() {
    return (
        <CanvasContainer>

            <Canvas>
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </CanvasContainer>
    );
}
export default Landing;