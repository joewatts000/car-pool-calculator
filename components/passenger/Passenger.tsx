import React, { useCallback } from 'react';
// import styled from 'styled-components';
import { Button } from '../../common/SharedStyles';

const AddPassenger = ({ closePopup, onSubmit }) => {
  const imageRef = React.useRef(null);
  const nameRef = React.useRef(null);

  const handleSubmit = useCallback(() => {
    closePopup();
    onSubmit(imageRef.current.value, nameRef.current.value);
  }, [closePopup, onSubmit]);

  return (
    <div>
      <input type="file" name="upload-image" ref={imageRef} />
      <input type="text" name="name" placeholder="Name" ref={nameRef} />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default AddPassenger;
