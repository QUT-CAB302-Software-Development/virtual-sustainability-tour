import React from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './Card.css';


function View360({ place, setView360State }) {
    let image;
    try   { image = require(`../../images/panoramas/${place.name}.jpg`); }
    catch { image = require(`../../images/nullPanorama.jpg`); }
    

    return (
        <>
            <div className="close-button-container">
                <IconButton onClick={() => setView360State(false)}>
                    <CloseIcon sx={{ borderRadius: '50%' }} className="close-button" />
                </IconButton>
            </div>
            <ReactPhotoSphereViewer src={image} height={'90vh'} width={"100%"} defaultYaw={-90} minFov={50} maxFov={100}/>
        </>
    );
}

export default View360;