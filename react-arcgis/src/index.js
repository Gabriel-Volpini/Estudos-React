import React from 'react';
import * as ReactDOM from 'react-dom';
import { loadCss } from 'esri-loader';
import { Map, Scene } from '@esri/react-arcgis';
import { useState, useEffect } from 'react';
import { loadModules } from 'esri-loader';
import mark from './marker.svg'
 
const BermudaTriangle = (props) => {
 
    const [graphic, setGraphic] = useState(null);
    useEffect(() => {
 
        loadModules(['esri/Graphic']).then(([Graphic]) => {
         // First create a point geometry (this is the location of the Titanic)
        var point = {
            type: "point", // autocasts as new Point()
            latitude: props.lat,
            longitude: props.lng
          };
  
          // Create a symbol for drawing the point
          var markerSymbol = {
            type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
  url: "https://media-exp1.licdn.com/dms/image/C4D0BAQGNptgoajwi9g/company-logo_200_200/0?e=1590019200&v=beta&t=C8jyq0TGYFkl3JOW9ap5FCBEIJASJV5kFo5AHiEs4TM",
  width: "64px",
  height: "64px"
          };
  
          // Create a graphic and add the geometry and symbol to it
          var pointGraphic = new Graphic({
            geometry: point,
            symbol: markerSymbol
          }); 

            setGraphic(pointGraphic);
            props.view.graphics.add(pointGraphic);
        }).catch((err) => console.error(err));
 
        return function cleanup() {
            props.view.graphics.remove(graphic);
        };
    }, []);
 
    return null;
 
}
 
ReactDOM.render(
    <div style={{ width: '100vw', height: '100vh' }}>
        <Scene class="full-screen-map">
            <BermudaTriangle 
                lat={-19.9813463}
                lng={-43.9460538}
            />
            <BermudaTriangle 
                lat={-43.9460538}
                lng={-19.9813463}
            />
        </Scene>
    </div>,
  document.getElementById('root')
);


 
