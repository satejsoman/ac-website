import React from 'react';

// import { Map, GeoJSON, TileLayer } from 'react-leaflet'
import { Map, GeoJSON } from 'react-leaflet'
// import Choropleth from 'react-leaflet-choropleth'

// import MH from "../data/MH.json"
import IN from "../data/india.json"

function Rt_color(Rt) { 
    return Rt > 2 ? "#d9534f" : 
           Rt > 1 ? "#fd7e14" : 
                    "#4BBF73";
}

export const state_codes = {
    "AN": "Andaman and Nicobar Islands",
    "AP": "Andhra Pradesh",
    "AR": "Arunachal Pradesh",
    "AS": "Assam",
    "BR": "Bihar",
    "CH": "Chandigarh",
    "CT": "Chhattisgarh",
    "DN": "Dadra and Nagar Haveli",
    "DD": "Daman and Diu",
    "DL": "Delhi",
    "GA": "Goa",
    "GJ": "Gujarat",
    "HR": "Haryana",
    "HP": "Himachal Pradesh",
    "JK": "Jammu and Kashmir",
    "JH": "Jharkhand",
    "KA": "Karnataka",
    "KL": "Kerala",
    "LD": "Lakshadweep",
    "MP": "Madhya Pradesh",
    "MH": "Maharashtra",
    "MN": "Manipur",
    "ML": "Meghalaya",
    "MZ": "Mizoram",
    "NL": "Nagaland",
    "OR": "Odisha",
    "PY": "Puducherry",
    "PB": "Punjab",
    "RJ": "Rajasthan",
    "SK": "Sikkim",
    "TN": "Tamil Nadu",
    "TG": "Telangana",
    "TR": "Tripura",
    "UP": "Uttar Pradesh",
    "UT": "Uttarakhand",
    "WB": "West Bengal",
}

// function highlightFeature (e) {
//     var layer = e.target;
  
//     layer.setStyle({
//       weight: 5,
//       color: '#666',
//       dashArray: '',
//       fillOpacity: 0.7
//     });
//   }
  
//   // reset default style on mouseOut
//   function resetHighlight (component, e) {
//       console.log(component.refs.geojson);
//     // geojsonresetStyle(e.target);
//     component.refs.geoJsonRef.resetStyle(e.target)
//   }

//   function onEachFeature (component, feature, layer) {
//     console.log(arguments);
//       layer.on({
//         mouseover: highlightFeature,
//         mouseout: resetHighlight.bind(null, component),
//       });
//     }


export class NationalMap extends React.Component {
    geoJsonRef = React.createRef();
    viewport = { 
        lat: 23.384770186094563,
        lng: 79.47014819820568,
        zoom: 4.45
    }

    // highlightFeature(e) {
    //     var layer = e.target;
    
    //     layer.setStyle({
    //         weight: 5,
    //         color: '#666',
    //         dashArray: '',
    //         fillOpacity: 0.7
    //     });
    
    //     // if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    //     //     layer.bringToFront();
    //     // }
    // }
    
    // resetHighlight(e) {
    //     this.geoJsonRef.leafletElement.resetStyle(e.target);
    // }
    
    // onEachFeature(_, layer) {
    //     layer.on({
    //         mouseover: this.highlightFeature.bind(this),
    //         mouseout:  this.resetHighlight.bind(this)
    //     });
    // }
    
    style(feature) {
        return {
            fillColor: Rt_color(feature.properties.Rt-1),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.8
        };
    }

    render() { 
        return (
        // <Jumbotron fluid id="natmapjumbotron">
            <Map center={[this.viewport.lat, this.viewport.lng]} zoom={this.viewport.zoom} zoomControl={false} scrollWheelZoom={false}>
                <GeoJSON ref={this.geoJsonRef} data={IN} style={this.style}/>
                {/* onEachFeature={onEachFeature} */}
            </Map>
        // </Jumbotron>
        )
    }
}