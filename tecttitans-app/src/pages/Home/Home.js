import React from 'react';
import styled from "styled-components";
import {Earth} from "./Earth";
import { Canvas } from "@react-three/fiber";
import {Suspense} from "react";
import {TopSection} from "./TopSection";

const CanvasContainer = styled.div `
  width: 100%;
  height: 180vh;
`;


function Home() {
    return (
        <CanvasContainer>
            <Canvas style={{position: 'fixed', overflow: 'hidden'}}> 
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
            <TopSection/>
        </CanvasContainer>
    );
}
export default Home;