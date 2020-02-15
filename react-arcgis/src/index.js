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
        if(!props.limpa)return
        loadModules(['esri/Graphic']).then(([Graphic]) => {
         // First create a point geometry (this is the location of the Titanic)
         var polyline = {
            type: "polyline",  // autocasts as new Polyline()
              paths: [
                [-111.30, 52.68],
                [-98, 49.5],
                [-93.94, 29.89]
              ]
          };
          
          var polylineSymbol = {
            type: "simple-line",  // autocasts as SimpleLineSymbol()
            color: [226, 119, 40],
            width: 4
          };
          
          var polylineAtt = {
            Name: "Keystone Pipeline",
            Owner: "TransCanada"
          };
          
          var polylineGraphic = new Graphic({
            geometry: polyline,
            symbol: polylineSymbol,
            attributes: polylineAtt
          });
          

            setGraphic(polylineGraphic);
            props.view.graphics.add(polylineGraphic);
        }).catch((err) => console.error(err));
 
        return function cleanup() { //UnMount
            props.view.graphics.remove(graphic);
        };
    }, [props.limpa ]);

    useEffect(() => {
        if(props.limpa)return

        props.view.graphics.remove(graphic);
    },[props.limpa])
 
    return null;
 
}
 function Teste({children}){
    
    const [graphic, setGraphic] = useState(false);
    

     return<div style={{ width: '100vw', height: '100vh' }}><button onClick={()=>setGraphic(!graphic)}>aaa</button>
        <Scene class="full-screen-map">

                <BermudaTriangle 
                    limpa={graphic}
                    lat={-43.9460538}
                    lng={-19.9813463}
                />
            </Scene>
     </div>
 }
ReactDOM.render(
    <div >
        <Teste/>
    </div>,
  document.getElementById('root')
);


 
