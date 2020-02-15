import React from 'react';
import * as ReactDOM from 'react-dom';
import { loadCss } from 'esri-loader';
import { Scene } from '@esri/react-arcgis';
import { useState, useEffect } from 'react';
import { loadModules } from 'esri-loader';
 
const BermudaTriangle = (props) => {
 
    const [graphic, setGraphic] = useState(null);
    useEffect(() => {
 
        loadModules(['esri/Graphic']).then(([Graphic]) => {
         // First create a point geometry (this is the location of the Titanic)
        var point = {
            type: "point", // autocasts as new Point()
            latitude: -19.9813463,
            longitude: -43.9460538
          };
  
          // Create a symbol for drawing the point
          var markerSymbol = {
            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
            color: [226, 119, 40],
            outline: {
              // autocasts as new SimpleLineSymbol()
              color: [255, 255, 255],
              width: 2
            }
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
            <BermudaTriangle />
        </Scene>
    </div>,
  document.getElementById('root')
);


 
