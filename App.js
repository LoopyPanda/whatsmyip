import './App.css';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// https://react-bootstrap.netlify.app/layout/grid/#grid-props
import 'bootstrap/dist/css/bootstrap.min.css';
import Leaflet from './leaflet';
import Card from "./Card"

console.log(process.env.REACT_APP_GEO_API_KEY)

function App() {
  const [geoData, setGeoData] = useState(); 

  const apiKey = process.env.REACT_APP_GEO_API_KEY

useEffect(() =>{
  fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${apiKey}`) 
  .then(response => response.json())
  .then(data =>setGeoData(data))
  .catch((error) =>{
    console.log(error)
  })
}, [apiKey]);

if (!geoData) {
  return <h2>Loading...</h2>
}

console.log(geoData)

  return (
  <div className="App">
    <Container>
      <Row className="justify-content-center">
        <Col md="auto">
          <div>
          <Card geoData={geoData}/>
          <Leaflet position={[geoData.location.lat, geoData.location.lng]} />
          </div>
          </Col>
      </Row>
    </Container>
</div>

  );
}

export default App;
