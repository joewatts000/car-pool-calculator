import React from 'react';
import AddPassenger from '../passenger/Passenger';
import Popup from '../Popup';

const DriverPopup = ({ closeDriverPopup, setDriver }) => {
  const handleDriverSubmit = (image, name) => {
    setDriver({ image, name });
  };
  return (
    <Popup closePopup={closeDriverPopup}>
      <AddPassenger
        closePopup={closeDriverPopup}
        onSubmit={handleDriverSubmit}
      />
    </Popup>
  );
};

export default DriverPopup;
