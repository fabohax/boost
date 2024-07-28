import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";

export type Place = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}

const locations: Array<Place> = [
  {
    name: "BOOST MIRAFLORES",
    address: "Compu Palace / Tienda 2104 2° Piso",
    latitude: -12.116420418621225,
    longitude: -77.0287265820122
  },
  {
    name: "BOOST SURCO",
    address: "Av. Caminos del Inca 257 Centro comercial Caminos del Inca II Tda 252 2° Piso",
    latitude: -12.113762529020235,
    longitude: -76.99152618953707
  },
  {
    name: "BOOST SAN MIGUEL",
    address: "Av. Prolongación La Mar N° 2275 en el C.C Shopping Center Tda. 145",
    latitude: -12.089250742059397,
    longitude: -77.083280720849
  },
  {
    name: "BOOST INDEPENDENCIA",
    address: "Av. industrial 3670 C.C. Viera C.C. 1er Piso, Stand L10",
    latitude: -11.990736380324217,
    longitude: -77.0591754318671
  },
  {
    name: "BOOST ICA",
    address: "Calle Las Brunias 192 Urb. San Isidro",
    latitude: -14.07269627651801,
    longitude: -75.72879502333006
  }
];

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "boostpe",
    googleMapsApiKey: "AIzaSyD59EC-JGMs7liW0xTwdVpxY9z0VzXEl1o",
  });  

  const containerStyle = {
    marginTop:"5vh",
    width: "75vw",
    height: "66vh",
    borderRadius:"1em",
    margin:"0 auto",
    marginBottom:"1em",
    filter:"saturate(1.5)",
  };

  const center = {
    lat: -12.05,
    lng: -77.03,
  };

  const [selectedPlace, setSelectedPlace] = useState<Place | undefined>(undefined);


  return (
    <div>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          {locations.map((place) => (
            <Marker
              key={`${place.address}-${place.name}-${place.latitude}-${place.longitude}`}
              position={{ lat: place.latitude, lng: place.longitude }}
              onClick={() => {
                place === selectedPlace
                  ? setSelectedPlace(undefined)
                  : setSelectedPlace(place);
              }}
            />
          ))}
          {selectedPlace && (
            <InfoWindow
              position={{
                lat: selectedPlace.latitude,
                lng: selectedPlace.longitude,
              }}
              zIndex={1}
              options={{
                pixelOffset: new google.maps.Size(0, -40),
              }}
              onCloseClick={() => setSelectedPlace(undefined)}
            >
              <div>
                <h3>{selectedPlace.name}</h3>
                <p>{selectedPlace.address}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
      <h1 className='font-bold text-center mb-4 mx-auto'>📍 Visítanos en cualquiera de nuestras tiendas 🛒</h1>
    </div>
  );
}
