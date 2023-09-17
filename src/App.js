import React, { useState } from 'react';

function App() {
  // Use useState to initialize userLocation as an object with null values
  const [userLocation, setUserLocation] = useState({ latitude: null, longitude: null });

  const getUserLocation = () => {
    // Check if geolocation is available in the browser
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting user information:", error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser');
    }
  };

  return (
    <div>
      <h1>Geolocation App</h1>
      <button onClick={getUserLocation}>Get User Location</button>
      {userLocation.latitude !== null && userLocation.longitude !== null && (
        <div>
          <h2>User Location</h2>
          <p>Latitude: {userLocation.latitude}</p>
          <p>Longitude: {userLocation.longitude}</p>
        </div>
      )}
    </div>
  );
}

export default App;
