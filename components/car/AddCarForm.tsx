import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Button } from '../../common/SharedStyles';
// import { ErrorMessage, Field, Form, Formik } from 'formik';
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
  const seatsRef = useRef(null);
  const departureRef = useRef(null);
  const returnRef = useRef(null);

  const handleSubmit = useCallback(
    (data) => {
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
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          handleSubmit(values);
        }}
      >
        <Form>
          <label htmlFor="seats">Seats</label>
          <Field id="seats" name="seats" />
          <label htmlFor="departureTime">Depart</label>
          <Field
            id="departureTime"
            name="departureTime"
            type="datetime-local"
          />
          <label htmlFor="returnTime">Return</label>
          <Field id="returnTime" name="returnTime" type="datetime-local" />

          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
      {/* <Formik
        initialValues={{
          seats: 5,
          departure: getRandomFutureDate(),
          return: getRandomFutureDate(),
        }}
        validate={(values) => {
          console.log('validating');
          const errors = {
            seats: null,
            departure: null,
            return: null,
          };
          if (!values.seats) {
            console.log('error');
            errors.seats = 'Required';
          } else if (isNaN(values.seats)) {
            console.log('error');
            errors.seats = 'Invalid seats';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log('submitting: ', values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, isValidating }) => (
          <Form>
            <InputBox>
              Seats: <Field type="number" min="1" name="seats" />
              <ErrorMessage name="seats" component="div" />
            </InputBox>
            <InputBox>
              Departure:{' '}
              <Field type="datetime-local" min="1" name="departure" />
              <ErrorMessage name="departure" component="div" />
            </InputBox>
            <InputBox>
              Return: <Field type="datetime-local" name="return" />
              <ErrorMessage name="return" component="div" />
            </InputBox>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <div>
              {isValidating}, {isSubmitting}
            </div>
          </Form>
        )}
      </Formik> */}
    </Box>
  );
};

const Box = styled.div``;
const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default AddCarForm;
