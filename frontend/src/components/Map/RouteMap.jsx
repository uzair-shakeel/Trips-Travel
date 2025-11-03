import React from "react";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "12px",
  overflow: "hidden",
};

const center = { lat: 19.076, lng: 72.8777 }; // Default: Mumbai

function RouteMap({ origin, destination, waypoints = [] }) {
  const [directions, setDirections] = React.useState(null);

  const directionsCallback = (response) => {
    if (response && response.status === "OK") {
      setDirections(response);
    }
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <DirectionsService
          options={{
            origin,
            destination,
            waypoints,
            travelMode: "DRIVING",
          }}
          callback={directionsCallback}
        />
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default RouteMap;
