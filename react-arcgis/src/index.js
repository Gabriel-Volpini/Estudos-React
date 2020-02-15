import React from 'react';
import * as ReactDOM from 'react-dom';
import { loadCss } from 'esri-loader';
import { WebMap, WebScene } from '@esri/react-arcgis';
 
// load esri styles before rendering multiple react-arcgis components
loadCss();
 
ReactDOM.render(
    <div style={{ width: '100vw', height: '100vh' }}>
        <WebMap id="6627e1dd5f594160ac60f9dfc411673f" />
        <WebScene id="f8aa0c25485a40a1ada1e4b600522681" />
    </div>,
  document.getElementById('root')
);