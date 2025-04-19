import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import colorPalette from '../colorPalette';
import { useMemo } from 'react';
import { useLoadScript } from '@react-google-maps/api';

const MapView = ({ eventLocation, eventName }) => {
  const [showInfoWindow, setShowInfoWindow] = React.useState(false);
  const libraries = useMemo(() => ['places', 'geocoding', 'maps'], []);

  const mapStyles = {
    height: "400px",
    width: "100%",
    borderRadius: "8px"
  };

  const defaultCenter = {
    lat: parseFloat(eventLocation.latitude),
    lng: parseFloat(eventLocation.longitude)
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={libraries}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      >
        <Marker 
          position={defaultCenter}
          onClick={() => setShowInfoWindow(true)}
        >
          {showInfoWindow && (
            <InfoWindow
              position={defaultCenter}
              onCloseClick={() => setShowInfoWindow(false)}
            >
              <div>
                <h3>{eventName}</h3>
                <p>{eventLocation.address}</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;