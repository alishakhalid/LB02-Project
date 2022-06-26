import React, { useState } from "react";
import { Form, Field, Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import { RegistrationType } from "../../types/RegistrationType";
import {
  TextField,
  Typography,
  Button,
  Container,
  Autocomplete,
  Grid,
  Box,
} from "@mui/material";

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

const topFilms = ["Switzerland", "Pakistan"];
const Registrate = () => {
  const [value, setValue] = useState<string | null>();
  const [inputValue, setInputValue] = useState("");

  return (
    <Container>
      <Box sx={{ bgcolor: "#B2DFDB", height: "100vh" }}>
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
              <Grid item container spacing={3}>
                <Typography
                  variant="h3"
                  gutterBottom
                  component="div"
                  style={{ textAlign: "center" }}
                >
                  CREATE ACCOUNT
                </Typography>
                <Grid container direction="row" xs={12}>
                  <Grid container direction="row" xs={5}>
                    <TextField
                      label="Surname"
                      variant="outlined"
                      fullWidth
                      type="text"
                      placeholder="Max"
                      required
                    />
                  </Grid>
                  <Grid container direction="row" xs={2}></Grid>
                  <Grid container direction="row" xs={5}>
                    <TextField
                      label="Lastname"
                      variant="outlined"
                      fullWidth
                      type="text"
                      name="lastname"
                      placeholder="Muster"
                      required
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="E-Mail"
                    variant="outlined"
                    fullWidth
                    type="email"
                    name="email"
                    placeholder="maxmuster@gmail.com"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Address"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="address"
                    placeholder="Zurich"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Postal code"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="postalCode"
                    placeholder="8005"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    value={value}
                    onChange={(event: any, newValue: string | null) => {
                      setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    id="country"
                    options={topFilms}
                    renderInput={(params) => (
                      <TextField {...params} label="Country" />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  {" "}
                  <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="username"
                    placeholder="max.muster"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  {" "}
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    name="password"
                    required
                  />
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  style={{ justifySelf: "flex-end" }}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    href="https://www.figma.com/file/7GNm1ykQhndcDxlnmqkd1P/Modul133_Mockup?node-id=2%3A5"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};
export default Registrate;
