import React from 'react';
import styled from "styled-components";
import {Earth} from "./Earth";
import { Canvas } from "@react-three/fiber";
import {Suspense} from "react";
import {TopSection} from "./TopSection";


const CanvasContainer = styled.div `
  width: 100vw;
  height: 160vh;
`;


function Home() {
    return (
        <CanvasContainer>
            <TopSection />
            <Canvas style={{position: 'fixed', overflow: 'hidden'}}> 
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </CanvasContainer>
    );
}
export default Home;