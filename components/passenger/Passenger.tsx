import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  Divider,
  FieldGroup,
  FlexCenter,
  Label,
} from '../../common/SharedStyles';
import { Form, Formik, FormikHelpers, Field } from 'formik';

interface Values {
  image: any;
  passengerName: string;
}

const AddPassenger = ({ closePopup, onSubmit }) => {
  const [image, setImage] = useState('');

  const handleSubmit = useCallback(
    (data) => {
      const { passengerName } = data;
      onSubmit(image, passengerName);
      closePopup();
    },
    [closePopup, onSubmit, image]
  );

  const onChange = (e: any) => {
    setImage(e.target.value);
  };

  return (
    <div>
      <Formik
        initialValues={{
          image: '',
          passengerName: '',
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
            <Label htmlFor="image">Image</Label>
            <FileInputBox>
              <Field type="file" name="image" onChange={onChange} id="image" />
              <FileName>{image}</FileName>
            </FileInputBox>
          </FieldGroup>
          <FieldGroup>
            <Label htmlFor="passengerName">Name</Label>
            <Field type="text" name="passengerName" id="passengerName" />
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

const FileInputBox = styled.div`
  input {
    height: 48px;
  }
`;
const FileName = styled.div`
  padding: 8px 0px;
  text-align: center;
`;

export default AddPassenger;
