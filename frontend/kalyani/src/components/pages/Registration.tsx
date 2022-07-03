import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import { Formik, Form, FormikProps } from "formik";
import * as yup from "yup";
import Header from "../molecules/Header";
import Footer from "../organisms/Footer";
import "../../styling/Registration.css";
import { RegistrationType } from "../../types/RegistrationType";
import { Autocomplete, Typography } from "@mui/material";
import TextButton from "../atoms/Button";
import CustomerService from "../../services/CustomerService";
import CountryService from "../../services/CountryService";
import ApiService from "../../services/ApiService";
import LocationService from "../../services/LocationService";
import { CityType } from "../../types/CityType";
import { CountryType } from "../../types/CountryType";
import Button from "@mui/material/Button";

const Registrate = () => {
  const [country, setCountry] = useState([]);
  const [cities, setCities] = useState([]);

  const getCountries = () => {
    return CountryService.getCountries()
      .then((res) => setCountry(res.data))
      .catch((err) => console.log(err, "failed"));
  };

  const getCities = () => {
    return LocationService.getCities()
      .then((res) => setCities(res.data))
      .catch((err) => console.log(err, "failed"));
  };

  console.log(country, "country got it?");
  console.log(cities, "cities?");

  const createUser = (values: RegistrationType) => {
    return CustomerService.createCustomer(values);
  };

  const initialValues: RegistrationType = {
    customerSurname: "",
    customerLastname: "",
    customerEmail: "",
    customerAddress: "",
    location: "",
    country: "",
    password: "",
  };

  const passwordMatch =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}S$/;

  const validationSchema = yup.object().shape({
    customerSurname: yup.string().required("Firstname is a Required field"),
    customerLastname: yup.string().required("Lastname is a Required field"),
    customerEmail: yup.string().email("Email is invalid").required("Required"),
    customerAddress: yup.string().required("Address is a Required field."),
    location: yup.string().required("Postal Code is a Required field"),
    country: yup.string().required("Please choose a country"),
    password: yup.string().min(8).required("Please set a password"),
  });

  useEffect(() => {
    getCountries().then(getCities);
  }, []);

  const handleSubmit = (values: RegistrationType) => {
    createUser(values);
    //alert(JSON.stringify(values));
  };

  return (
    <>
      <Header />
      <div className="registrationForm">
        <Formik
          initialValues={initialValues}
          onSubmit={() => {}}
          validationSchema={validationSchema}
        >
          {(props: FormikProps<RegistrationType>) => {
            const { values, touched, errors, handleBlur, handleChange } = props;
            return (
              <Form>
                <h1 className="title">CREATE ACCOUNT</h1>
                <Grid container justify="space-around" direction="row">
                  <Grid item lg={5} md={5} sm={5} xs={5} className="textfield">
                    <TextField
                      fullWidth
                      name="customerSurname"
                      id="customerSurname"
                      label="Firstname"
                      variant="outlined"
                      value={values.customerSurname}
                      type="text"
                      helperText={
                        errors.customerSurname && touched.customerSurname
                          ? errors.customerSurname
                          : null
                      }
                      error={
                        errors.customerSurname && touched.customerSurname
                          ? true
                          : false
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={5} sm={5} xs={5} className="textfield">
                    <TextField
                      fullWidth
                      name="customerLastname"
                      id="customerLastname"
                      label="Lastname"
                      variant="outlined"
                      value={values.customerLastname}
                      type="text"
                      helperText={
                        errors.customerLastname && touched.customerLastname
                          ? errors.customerLastname
                          : null
                      }
                      error={
                        errors.customerLastname && touched.customerLastname
                          ? true
                          : false
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={5} sm={5} xs={5} className="textfield">
                    <TextField
                      fullWidth
                      name="customerAddress"
                      id="customerAddress"
                      label="Address"
                      variant="outlined"
                      value={values.customerAddress}
                      type="text"
                      helperText={
                        errors.customerAddress && touched.customerAddress
                          ? errors.customerAddress
                          : null
                      }
                      error={
                        errors.customerAddress && touched.customerAddress
                          ? true
                          : false
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={5} sm={5} xs={5} className="textfield">
                    <Autocomplete
                      id="location"
                      options={cities}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Location"
                          variant="outlined"
                          value={values.location}
                          required
                          onChange={handleChange}
                        />
                      )}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={11}
                    md={11}
                    sm={11}
                    xs={11}
                    className="textfield"
                  >
                    <Autocomplete
                      id="country"
                      options={country}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Country"
                          variant="outlined"
                          value={values.country}
                          required
                          helperText={
                            errors.country && touched.country
                              ? errors.country
                              : null
                          }
                          error={
                            errors.country && touched.country ? true : false
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      )}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={11}
                    md={11}
                    sm={11}
                    xs={11}
                    className="textfield"
                  >
                    <TextField
                      fullWidth
                      name="customerEmail"
                      id="customerEmail"
                      label="Email"
                      variant="outlined"
                      value={values.customerEmail}
                      type="email"
                      helperText={
                        errors.customerEmail && touched.customerEmail
                          ? errors.customerEmail
                          : null
                      }
                      error={
                        errors.customerEmail && touched.customerEmail
                          ? true
                          : false
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </Grid>

                  <Grid
                    item
                    lg={11}
                    md={11}
                    sm={11}
                    xs={11}
                    className="textfield"
                  >
                    <TextField
                      fullWidth
                      name="password"
                      id="password"
                      label="Password"
                      variant="outlined"
                      value={values.password}
                      type="password"
                      helperText={
                        errors.password && touched.password
                          ? errors.password
                          : "One uppercase, one lowercase, one special character and no spaces"
                      }
                      error={errors.password && touched.password ? true : false}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </Grid>

                  <Grid
                    item
                    lg={11}
                    md={11}
                    sm={11}
                    xs={11}
                    className="submitButton"
                  >
                    <Button
                      color="primary"
                      type="submit"
                      variant="contained"
                      onClick={() => handleSubmit(values)}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </div>
      <Footer />
    </>
  );
};

export default Registrate;
