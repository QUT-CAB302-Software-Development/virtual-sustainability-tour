import React, { useEffect, useRef } from 'react';
import * as PANOLENS from 'panolens';
import './style.css';

function PanoramaViewer() {

  const viewerRef = useRef(null);

  useEffect(() => {
    const panoramaImage = new PANOLENS.ImagePanorama('../../../images/test360.jpeg');
    const viewer = new PANOLENS.Viewer({
      container: viewerRef.current,
      autoRotate: true,
      autoRotateSpeed: 0.3,
      controlBar: false,
    });

    viewer.add(panoramaImage);
    return () => {
        // viewer.dispose();
      };
    }, []);



  return (<div ref={viewerRef} className="image-container" style={{ width: '50%', height: '50vh' }} />);
};

export default PanoramaViewer;