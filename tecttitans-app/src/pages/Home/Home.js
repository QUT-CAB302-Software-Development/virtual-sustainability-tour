import React from 'react';
import '../../App.css';
import {Earth} from "../../components/earth";
import styled from "styled-components";
import {Canvas } from "@react-three/fiber";
import {Suspense} from "react";



const CanvasContainer = styled.div `
  width: 100%;
  height: 100%;
`;
function Home() {
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
export default Home;