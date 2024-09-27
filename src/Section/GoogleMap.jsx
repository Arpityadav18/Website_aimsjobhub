import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from 'google-maps-react';

const Map = () => {
  const [activeMarker, setActiveMarker] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleActiveMarker = (props, marker) => {
    setActiveMarker(marker);
    setSelectedPlace(props);
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
      >
        <Marker
          position={{ lat: 37.7749, lng: -122.4194 }}
          onClick={handleActiveMarker}
        />
        {activeMarker && (
          <InfoWindow
            marker={activeMarker}
            onCloseClick={() => setActiveMarker(null)}
          >
            <div>
              <h2>{selectedPlace.name}</h2>
              <p>{selectedPlace.address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;