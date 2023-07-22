import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  Divider,
  FieldGroup,
  FlexCenter,
  Label,
} from '../../common/SharedStyles';
import { Form, Formik, FormikHelpers } from 'formik';

interface Values {
  image: File;
  name: string;
}

const AddPassenger = ({ closePopup, onSubmit }) => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = useCallback(
    (data) => {
      const { image, name } = data;
      setName(name);
      onSubmit(image, name);
      closePopup();
    },
    [closePopup, onSubmit]
  );

  const onChange = (e: any) => {
    setImage(e.target.files[0].name);
  };

  console.log(image, name);

  return (
    <div>
      <Formik
        initialValues={{
          image: null,
          name: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setSubmitting(false);
          handleSubmit(values);
        }}
      >
        <Form>
          <FieldGroup>
            <Label htmlFor="file">Image</Label>
            <div>
              <FileInput type="file" name="upload-image" onChange={onChange} />
              <FileName>{image}</FileName>
            </div>
          </FieldGroup>
          <FieldGroup>
            <Label htmlFor="name">Name</Label>
            <input type="text" name="name" />
          </FieldGroup>
          <Divider height={20} />
          <FlexCenter>
            <Button type="submit">Submit</Button>
          </FlexCenter>
        </Form>
      </Formik>
    </div>
  );
};

const FileInput = styled.input`
  height: 48px;
`;
const FileName = styled.div`
  padding: 8px 0px;
  text-align: center;
`;

export default AddPassenger;
