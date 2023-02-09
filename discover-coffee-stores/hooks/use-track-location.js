import { useState } from 'react';

const useTrackLocation = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState('');
  const [latLong, setLatLong] = useState('');
  const [findingLocation, setFindingLocation] = useState(false);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLatLong(`${latitude},${longitude}`);
    setLocationErrorMsg('');
    setFindingLocation(false);
  };

  const error = () => {
    setLocationErrorMsg('Unable to retrieve your location');
    setFindingLocation(false);
  };

  const handleTrackLocation = () => {
    setFindingLocation(true);
    if (!navigator.geolocation) {
      setLocationErrorMsg('Geolocation is not supported by your browser');
      setFindingLocation(false);
    } else {
      //status.textContext = 'Locating...';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return { latLong, handleTrackLocation, locationErrorMsg, findingLocation };
};

export default useTrackLocation;
