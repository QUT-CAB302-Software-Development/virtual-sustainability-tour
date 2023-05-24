import React from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import test360 from '../../images/test360.jpeg';
import './Card.css';


function View360({ place, setView360State }) {

    // const panoImage = place.panoimage;

    return (
        <>
            <div className="close-button-container">
                <IconButton onClick={() => setView360State(false)}>
                    <CloseIcon sx={{ borderRadius: '50%' }} className="close-button" />
                </IconButton>
            </div>
                <ReactPhotoSphereViewer src={test360} height={'90vh'} width={'100%'} />
        </>
    );
}

export default View360;