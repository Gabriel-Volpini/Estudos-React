import React from "react";
import { Map } from "@esri/react-arcgis"
export default function App(){
    return(
        <div ><Map loaderOptions={{ css: true }}/>
        </div>
    )
}