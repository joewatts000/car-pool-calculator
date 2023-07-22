import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import {
  Button,
  Divider,
  FieldGroup,
  FlexCenter,
  Label,
} from '../../common/SharedStyles';
import { Formik, Field, Form, FormikHelpers } from 'formik';

const getRandomFutureDate = () => {
  const now = new Date().getTime();
  const random = Math.random() * 1000 * 60 * 60 * 24 * 7;
  return new Date(now + random).toISOString().slice(0, 16);
};

interface Values {
  seats: number;
  departureTime: string;
  returnTime: string;
}

const AddCarForm = ({ closePopup, addCar }) => {
  const handleSubmit = useCallback(
    (data) => {
      console.log(data);
      const { seats, departureTime, returnTime } = data;
      addCar({ seats, departureTime, returnTime });
      closePopup();
    },
    [addCar, closePopup]
  );

  return (
    <Box>
      <Formik
        initialValues={{
          seats: 5,
          departureTime: getRandomFutureDate(),
          returnTime: getRandomFutureDate(),
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
            <Label htmlFor="seats">Seats</Label>
            <Field id="seats" name="seats" type="number" min="1" max="10" />
          </FieldGroup>
          <FieldGroup>
            <Label htmlFor="departureTime">Depart</Label>
            <Field
              id="departureTime"
              name="departureTime"
              type="datetime-local"
            />
          </FieldGroup>
          <FieldGroup>
            <Label htmlFor="returnTime">Return</Label>
            <Field id="returnTime" name="returnTime" type="datetime-local" />
          </FieldGroup>
          <Divider height={20} />
          <FlexCenter>
            <Button type="submit">Submit</Button>
          </FlexCenter>
        </Form>
      </Formik>
    </Box>
  );
};

const Box = styled.div``;

export default AddCarForm;
