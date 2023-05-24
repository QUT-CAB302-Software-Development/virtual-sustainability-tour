import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

let map;
const mapOptions = {
  tilt: 0,
  heading: 0,
  zoom: 18,
  center: { lat: -27.4711435, lng: 153.0274624 },
  mapId: "15431d2b469f209e",
};

function initMap() {
  const mapDiv = document.getElementById("map");
  map = new google.maps.Map(mapDiv, mapOptions);
  initWebglOverlayView(map);
}

function initWebglOverlayView(map) {
  let scene, renderer, camera, loader;
  const webglOverlayView = new google.maps.WebGLOverlayView();

  webglOverlayView.onAdd = () => {
    // initialise scene, camera, loader
    scene = new Scene();
    camera = new PerspectiveCamera();
    loader = new GLTFLoader();
    loader.load('a', () => {});
  };

  webglOverlayView.onContextRestored = () => {
    renderer = new WebGLRenderer();
    // Wait to move the camera until the 3D model loads.
    loader.manager.onLoad = () => {
      renderer.setAnimationLoop(() => {
        webglOverlayView.requestRedraw();
        const { tilt, heading } = mapOptions;
        map.moveCamera({ tilt, heading });
        if (mapOptions.tilt < 67.5) {
          mapOptions.tilt += 0.5;
        } else {
          mapOptions.heading += 0.2;
        }
      });
    };
  };
  webglOverlayView.onDraw = () => {};
  webglOverlayView.setMap(map);
}
window.initMap = initMap;
