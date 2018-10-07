// import logo from './logo.svg';
import * as L from 'leaflet';
import * as React from 'react';
import './App.css';
import leafgreen from "./leaf-green.png";
import leaforange from "./leaf-orange.png";
import leafred from "./leaf-red.png";
import leafShadow from "./leaf-shadow.png";

// import secondLayer from './secondLayer'
// import whatup from './test'

import buildingLayer from './geojson/buldingLayer'
import defaultFacilityLayer from './geojson/defaultFacilityLayer'
import deviceLayer from './geojson/deviceLayer'
import tempFacilityLayer from './geojson/tempFacilityLayer'


// import TestPopup1 from "./TestPopup1";
// import statesData from './us-states'
class App extends React.Component {
  public componentDidMount() {
    const mymap = L.map('myMap').setView([51.505, -0.09], 2);
    function buildingStyle(featur: any) {
      return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
      };
    }
    function defaultFacilityStyle(featur: any) {
      return {
        weight: 2,
        opacity: 1,
        color: 'red',
        dashArray: '3',
        fillOpacity: 0.7
      };
    }
    function temporaryFacilityStyle(featur: any) {
      return {
        weight: 2,
        opacity: 1,
        color: 'green',
        dashArray: '3',
        fillOpacity: 0.7
      };
    }
    function deviceStyle(featur: any) {
      return {
        weight: 2,
        opacity: 1,
        color: 'purple',
        dashArray: '3',
        fillOpacity: 0.7
      };
    }
    function highlightFeature(e: any) {
      console.log('e', e, "그리고 name", e.target.feature.properties.name)
      const layer = e.target;
      const testSize = `What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting
       industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining
         essentially unchanged. It was p`

      layer.bindPopup(e.target.feature.properties.name || "이름 아직 안넣었음" + testSize).openPopup();
      layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
      });

      if (!L.Browser.ie && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
    // const info = new L.Control();
    // const what = L.DomUtil.create('div', 'info')
    // info.onAdd = (map) => {
    //   this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    //   this.update();
    //   return this._div;
    // };

    // // method that we will use to update the control based on feature properties passed
    // info.update = function (props) {
    //   this._div.innerHTML = '<h4>US Population Density</h4>' + (props ?
    //     '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
    //     : 'Hover over a state');
    // };

    // info.addTo(mymap);

    function resetHighlight(e: any) {
      console.log('reset e', e.target.defaultOptions.style.name)
      switch (e.target.defaultOptions.style.name) {
        case 'buildingStyle': return buildingGeoJSON.resetStyle(e.target);
        case 'defaultFacilityStyle': return defaultFacilityGeoJSON.resetStyle(e.target);
        case 'tempFacilityStyle': return tempFacilityGeoJSON.resetStyle(e.target);
        case 'deviceStyle': return deviceGeoJSON.resetStyle(e.target);
        default:
          console.log('얼마나 드러옴?', e.target)
      }
    }
    // function zoomToFeature(e: any) {
    //   mymap.fitBounds(e.target.getBounds());
    // }

    function onEachFeature(feature: any, layer: any) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        // click: zoomToFeature
      });
    }

    const buildingGeoJSON = L.geoJSON(buildingLayer, { style: buildingStyle, onEachFeature }).addTo(mymap);
    const defaultFacilityGeoJSON = L.geoJSON(defaultFacilityLayer, { style: defaultFacilityStyle, onEachFeature }).addTo(mymap)
    const tempFacilityGeoJSON = L.geoJSON(tempFacilityLayer, { style: temporaryFacilityStyle, onEachFeature }).addTo(mymap)
    const deviceGeoJSON = L.geoJSON(deviceLayer, { style: deviceStyle, onEachFeature }).addTo(mymap)
    // const secondLaye = L.layerGroup(getjson2)
    // buildingGeoJSON.bindPopup("I am a Building.")

    const littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.')
    const denver = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.')
    const aurora = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.')
    const golden = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.')

    const cities = L.layerGroup([littleton, denver, aurora, golden]);

    const littleton2 = L.marker([45.61, -105.02]).bindPopup('This is Littleton, CO.')
    const denver2 = L.marker([45.74, -104.99]).bindPopup('This is Denver, CO.')
    const aurora2 = L.marker([45.73, -104.8]).bindPopup('This is Aurora, CO.')
    const golden2 = L.marker([45.77, -105.23]).bindPopup('This is Golden, CO.')

    const cities2 = L.layerGroup([littleton2, denver2, aurora2, golden2]);

    const littleton3 = L.marker([55.61, -105.02]).bindPopup('This is Littleton, CO.')
    const denver3 = L.marker([55.74, -104.99]).bindPopup('This is Denver, CO.')
    const aurora3 = L.marker([55.73, -104.8]).bindPopup('This is Aurora, CO.')
    const golden3 = L.marker([55.77, -105.23]).bindPopup('This is Golden, CO.')

    const cities3 = L.layerGroup([littleton3, denver3, aurora3, golden3]);

    const overlayMaps = {
      "Cities": cities,
      "whatup": cities2,
      "holly": cities3,
      "Building": buildingGeoJSON,
      "Default Facility": defaultFacilityGeoJSON,
      "Temporary Facility": tempFacilityGeoJSON,
      "Device": deviceGeoJSON,
    };
    L.control.layers(undefined, overlayMaps).addTo(mymap);


    const LeafIcon = L.Icon.extend({
      options: {
        shadowUrl: leafShadow,
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
      }
    });

    const greenIcon = new LeafIcon({ iconUrl: leafgreen })
    const redIcon = new LeafIcon({ iconUrl: leafred })
    const orangeIcon = new LeafIcon({ iconUrl: leaforange })

    L.marker([50.5, -0.01], { icon: greenIcon }).addTo(mymap).bindPopup("I am a green leaf.");
    L.marker([60.5, -0.083], { icon: redIcon }).addTo(mymap).bindPopup("I am a red leaf.");
    L.marker([70.5, -0.5], { icon: orangeIcon }).addTo(mymap).bindPopup("I am an orange leaf.");


  }
  // public componentDidMount() {
  //   const mymap = L.map('myMap').setView([51.505, -0.09], 13);
  //   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibG9ueWVsZSIsImEiOiJjamdweDlwZXQwMGJlMndud3hndXg4N21nIn0.U59AnauHpBmHm8W1wekGjg', {
  //     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  //     maxZoom: 18,
  //     id: 'mapbox.streets',
  //     accessToken: 'pk.eyJ1IjoibG9ueWVsZSIsImEiOiJjamdweDlwZXQwMGJlMndud3hndXg4N21nIn0.U59AnauHpBmHm8W1wekGjg'
  //   }).addTo(mymap);

  //   const marker = L.marker([51.5, -0.09]).addTo(mymap); // const marker = 

  //   const circle = L.circle([51.508, -0.11], { // const circle = 
  //     color: 'red',
  //     fillColor: '#f03',
  //     fillOpacity: 0.5,
  //     radius: 500
  //   }).addTo(mymap);

  //   const polygon = L.polygon([ // const polygon = 
  //     [51.509, -0.08],
  //     [51.503, -0.06],
  //     [51.51, -0.047]
  //   ]).addTo(mymap);

  //   marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  //   circle.bindPopup("I am a circle.");
  //   polygon.bindPopup("I am a polygon.");

  //   const popup = L.popup();
  //   mymap.on('click', this.onMapClick(popup, mymap));

  //   circle.on('mousemove', this.onCircleHover)
  // }

  // public onMapClick = (popup: any, mymap: any) => (e: any) => {
  //   popup
  //     .setLatLng(e.latlng)
  //     .setContent("You clicked the map at " + e.latlng.toString())
  //     .openOn(mymap);
  // }

  // public onCircleHover = (e: any) => {
  //   console.log('circle hover~~~')
  // }

  public render() {
    return (
      <div id="myMap" />
    );
  }
}

export default App;
