import React from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Novotel_Brisbane_South_Bank from '../../images/panoramas/Novotel_Brisbane_South_Bank.jpg'
import './Card.css';


function View360({ place, setView360State }) {

    const image = place.panorama

    console.log({image})

    return (
        <>
            <div className="close-button-container">
                <IconButton onClick={() => setView360State(false)}>
                    <CloseIcon sx={{ borderRadius: '50%' }} className="close-button" />
                </IconButton>
            </div>
            <ReactPhotoSphereViewer src={Novotel_Brisbane_South_Bank} height={'100vh'} width={"100%"}/>
        </>
    );
}

export default View360;