import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Button,
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

const countries = ["Switzerland", "Pakistan"];

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
    customer_surname: "",
    customer_lastname: "",
    customer_email: "",
    customer_address: "",
    postal_code: "",
    country_name: "",
    customer_password: "",
  };

  const passwordMatch =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}S$/;

  const validationSchema = yup.object().shape({
    customer_surname: yup.string().required("Firstname is a Required field"),
    customer_lastname: yup.string().required("Lastname is a Required field"),
    customer_email: yup.string().email("Email is invalid").required("Required"),
    customer_address: yup.string().required("Address is a Required field."),
    postal_code: yup.string().required("Postal Code is a Required field"),
    country_name: yup.string().required("Please choose a country"),
    customer_password: yup.string().min(8).required("Please set a password"),
  });

  useEffect(() => {
    getCountries().then(getCities);
  }, []);

  const handleSubmit = (values: RegistrationType) => {
    createUser(values);
    console.log(createUser(values), "created user");
    alert(JSON.stringify(values));
  };

  return (
    <>
      <Header />
      <div className="registrationForm">
        <Formik
          initialValues={initialValues}
          onSubmit={(values: RegistrationType) => {
            handleSubmit(values);
          }}
          validationSchema={validationSchema}
        >
          {(props: FormikProps<RegistrationType>) => {
            const {
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              isSubmitting,
            } = props;
            return (
              <Form>
                <h1 className="title">CREATE ACCOUNT</h1>
                <Grid container justify="space-around" direction="row">
                  <Grid item lg={5} md={5} sm={5} xs={5} className="textfield">
                    <TextField
                      fullWidth
                      name="customer_surname"
                      id="customer_surname"
                      label="Firstname"
                      variant="outlined"
                      value={values.customer_surname}
                      type="text"
                      helperText={
                        errors.customer_surname && touched.customer_surname
                          ? errors.customer_surname
                          : null
                      }
                      error={
                        errors.customer_surname && touched.customer_surname
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
                      name="customer_lastname"
                      id="customer_lastname"
                      label="Lastname"
                      variant="outlined"
                      value={values.customer_lastname}
                      type="text"
                      helperText={
                        errors.customer_lastname && touched.customer_lastname
                          ? errors.customer_lastname
                          : null
                      }
                      error={
                        errors.customer_lastname && touched.customer_lastname
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
                      name="customer_address"
                      id="customer_address"
                      label="Address"
                      variant="outlined"
                      value={values.customer_address}
                      type="text"
                      helperText={
                        errors.customer_address && touched.customer_address
                          ? errors.customer_address
                          : null
                      }
                      error={
                        errors.customer_address && touched.customer_address
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
                      getOptionLabel={(option: CityType) =>
                        option.postalCode + " " + option.locationName
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Location"
                          variant="outlined"
                          value={values.postal_code}
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
                      id="country_name"
                      options={country}
                      getOptionLabel={(option: CountryType) =>
                        option.countryName
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Country"
                          variant="outlined"
                          value={values.country_name}
                          required
                          helperText={
                            errors.country_name && touched.country_name
                              ? errors.country_name
                              : null
                          }
                          error={
                            errors.country_name && touched.country_name
                              ? true
                              : false
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
                      name="customer_email"
                      id="customer_email"
                      label="Email"
                      variant="outlined"
                      value={values.customer_email}
                      type="email"
                      helperText={
                        errors.customer_email && touched.customer_email
                          ? errors.customer_email
                          : null
                      }
                      error={
                        errors.customer_email && touched.customer_email
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
                      name="customer_password"
                      id="customer_password"
                      label="Password"
                      variant="outlined"
                      value={values.customer_password}
                      type="password"
                      helperText={
                        errors.customer_password && touched.customer_password
                          ? errors.customer_password
                          : "One uppercase, one lowercase, one special character and no spaces"
                      }
                      error={
                        errors.customer_password && touched.customer_password
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
                    className="submitButton"
                  >
                    <TextButton
                      disabled={isSubmitting}
                      color="primary"
                      text="Create"
                    >
                      Submit
                    </TextButton>
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
