import "../App.css";
import styled from "styled-components";
import {Canvas } from "@react-three/fiber";
import {Suspense} from "react";
import {Earth} from "./earth";

const CanvasContainer = styled.div `
  width: 100%;
  height: 100%;
`;
function Globe() {
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

export default Globe;