import {makeStyles} from '@mui/styles';

export default makeStyles(() => ({
    paper: {
        padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '105px',
    },
    mapContainer: {
        height: '85vh', width: '100%',
    },
    markerContainer: {
        position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
    },
    pointer: {
        cursor: 'pointer',
    },
}));