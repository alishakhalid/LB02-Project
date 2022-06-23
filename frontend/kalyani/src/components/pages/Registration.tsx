import React from "react";
import { Form, Field, Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import { RegistrationType } from "../../types/RegistrationType";
import { TextField, Typography, Button, Container } from "@mui/material";

const initialValues: RegistrationType = {
  surname: "",
  lastname: "",
  email: "",
  address: "",
  postal_code: "",
  country: "",
  username: "",
  password: "",
};

const validation = yup.object().shape({
  surname: yup.string().required("Surname is a Required field"),
  lastname: yup.string().required("Required is a Required field"),
  email: yup.string().email("Email is invalid").required("Required"),
  address: yup.string().required("Address is a Required field."),
  postal_code: yup.string().required("Required field"),
  password: yup.string().min(8, "Must be 8 characters").required("Required"),
});
const Registrate = () => {
  return (
    <Container maxWidth="xs" style={{ backgroundColor: "blueviolet" }}>
      <Formik
        initialValues={initialValues}
        onSubmit={(
          values: RegistrationType,
          { setSubmitting }: FormikHelpers<RegistrationType>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={validation}
      >
        {({ values }) => (
          <Form>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              style={{ textAlign: "center" }}
            >
              CREATE ACCOUNT
            </Typography>
            <TextField
              label="Surname"
              variant="outlined"
              fullWidth
              type="text"
              placeholder="Max"
              required
            />
            <TextField
              label="Lastname"
              variant="outlined"
              fullWidth
              type="text"
              name="lastname"
              placeholder="Muster"
              required
            />
            <TextField
              label="E-Mail"
              variant="outlined"
              fullWidth
              type="email"
              name="email"
              placeholder="maxmuster@gmail.com"
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              name="password"
              required
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              href="https://www.figma.com/file/7GNm1ykQhndcDxlnmqkd1P/Modul133_Mockup?node-id=2%3A5"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default Registrate;
