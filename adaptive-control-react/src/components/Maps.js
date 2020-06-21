import React from 'react';

import { Map, GeoJSON } from 'react-leaflet'
// import { Map, GeoJSON } from 'react-leaflet'
// import Choropleth from 'react-leaflet-choropleth'

import AP from "../data/AP.json"
import AS from "../data/AS.json"
import BR from "../data/BR.json"
import CH from "../data/CH.json"
import CT from "../data/CT.json"
import DNDD from "../data/DNDD.json"
import DL from "../data/DL.json"
import GA from "../data/GA.json"
import GJ from "../data/GJ.json"
import HR from "../data/HR.json"
import HP from "../data/HP.json"
import JK from "../data/JK.json"
import JH from "../data/JH.json"
import KA from "../data/KA.json"
import KL from "../data/KL.json"
import MP from "../data/MP.json"
import MH from "../data/MH.json"
import MN from "../data/MN.json"
import ML from "../data/ML.json"
import OR from "../data/OR.json"
import PY from "../data/PY.json"
import PB from "../data/PB.json"
import RJ from "../data/RJ.json"
import SK from "../data/SK.json"
import TN from "../data/TN.json"
import TG from "../data/TG.json"
import TR from "../data/TR.json"
import UP from "../data/UP.json"
import UT from "../data/UT.json"
import WB from "../data/WB.json"

import IN from "../data/IN.json"

function Rt_color(Rt) { 
    return Rt > 2 ? "#f44455" : 
           Rt > 1 ? "#fcc100" : 
                    "#5fc27e" ;
}

export const state_codes = {
    // "AN": "Andaman and Nicobar Islands",
    "AP": "Andhra Pradesh",
    // "AR": "Arunachal Pradesh",
    "AS": "Assam",
    "BR": "Bihar",
    // "CH": "Chandigarh",
    "CT": "Chhattisgarh",
    "DL": "Delhi",
    "GA": "Goa",
    "GJ": "Gujarat",
    "HR": "Haryana",
    "HP": "Himachal Pradesh",
    "JK": "Jammu and Kashmir",
    "JH": "Jharkhand",
    "KA": "Karnataka",
    "KL": "Kerala",
    "MP": "Madhya Pradesh",
    "MH": "Maharashtra",
    "MN": "Manipur",
    "ML": "Meghalaya",
    "OR": "Odisha",
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

export const geo_data = { 
    "AP": AP,
    // "AR": AR,
    "AS": AS,
    "BR": BR,
    "CH": CH,
    "CT": CT,
    "DNDD": DNDD,
    "DL": DL,
    "GA": GA,
    "GJ": GJ,
    "HR": HR,
    "HP": HP,
    "JK": JK,
    "JH": JH,
    "KA": KA,
    "KL": KL,
    "MP": MP,
    "MH": MH,
    "MN": MN,
    "ML": ML,
    "OR": OR,
    "PY": PY,
    "PB": PB,
    "RJ": RJ,
    "SK": SK,
    "TN": TN,
    "TG": TG,
    "TR": TR,
    "UP": UP,
    "UT": UT,
    "WB": WB,
    "IN": IN
}

export class NationalMap extends React.Component {
    viewport = { 
        lat: 23.384770186094563,
        lng: 79.47014819820568,
        zoom: 4.45
    }

    style_fix(feature) {
        return {
            fillColor: "grey",
            weight: 0.8,
            opacity: 1,
            color: 'grey',
            fillOpacity: 1
        };
    }

    style(feature) {
        return {
            fillColor: Rt_color(feature.properties.Rt),
            weight: 1,
            opacity: 1,
            color: 'white',
            fillOpacity: 1
        };
    }

    render() { 
        var geokey = this.props.geokey;
        var mapkey = "map_" + geokey
        console.log("rendering map")
        console.log(this)
        console.log(this.props)
        console.log(geokey)
        console.log(mapkey)
        return (
        <Map key={mapkey} center={[this.viewport.lat, this.viewport.lng]} zoom={this.viewport.zoom}>
            <GeoJSON key="IN_fix" data={geo_data["IN"]}   style={this.style_fix}/>
            <GeoJSON key={geokey} data={geo_data[geokey]} style={this.style}/>
        </Map>)
    }
}