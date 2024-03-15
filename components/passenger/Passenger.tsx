import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  Divider,
  FieldGroup,
  FlexCenter,
} from '../../common/SharedStyles';
import { Form, Formik, FormikHelpers, Field } from 'formik';

interface Values {
  passengerName: string;
  isDriver: boolean;
}

const AddPassenger = ({ closePopup, onSubmit }) => {
  const handleSubmit = useCallback(
    (data) => {
      const { passengerName, isDriver } = data;
      onSubmit(passengerName, isDriver);
      closePopup();
    },
    [closePopup, onSubmit]
  );

  return (
    <div>
      <Formik
        initialValues={{
          image: '',
          passengerName: '',
          isDriver: false,
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
            <Label htmlFor="passengerName">Full Name</Label>
            <Field type="text" name="passengerName" id="passengerName" />
          </FieldGroup>
          <FieldGroup>
            <Label htmlFor="isDriver">Is driver</Label>
            <Field type="checkbox" name="isDriver" id="isDriver" />
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

const Label = styled.label`
  display: block;
  min-width: 80px;
`;

export default AddPassenger;
