import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { Formik, Form, FormikProps } from "formik";
import * as yup from "yup";
import Header from "../molecules/Header";
import Footer from "../organisms/Footer";
import "../../styling/Registration.css";
import { LoginType } from "../../types/LoginType";
import TextButton from "../atoms/Button";
import { Link } from "react-router-dom";
interface IFormStatus {
  message: string;
  type: string;
}
interface IFormStatusProps {
  [key: string]: IFormStatus;
}

const formStatusProps: IFormStatusProps = {
  success: {
    message: "Signed up successfully.",
    type: "success",
  },
  duplicate: {
    message: "Email-id already exist. Please use different email-id.",
    type: "error",
  },
  error: {
    message: "Something went wrong. Please try again.",
    type: "error",
  },
};

const Registrate = () => {
  const [displayFormStatus, setDisplayFormStatus] = useState(false);
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: "",
    type: "",
  });

  const createNewUser = async (data: LoginType, resetForm: Function) => {
    try {
      // API call integration will be here. Handle success / error response accordingly.
      if (data) {
        setFormStatus(formStatusProps.success);
        resetForm({});
      }
    } catch (error: any) {
      const response = error.response;
      if (response.data === "user already exist" && response.status === 400) {
        setFormStatus(formStatusProps.duplicate);
      } else {
        setFormStatus(formStatusProps.error);
      }
    } finally {
      setDisplayFormStatus(true);
    }
  };

  const initialValues: LoginType = {
    email: "",
    password: "",
  };

  const passwordMatch =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}S$/;

  const validationSchema = yup.object().shape({
    surname: yup.string().required("Surname is a Required field"),
    lastname: yup.string().required("Required is a Required field"),
    email: yup.string().email("Email is invalid").required("Required"),
    address: yup.string().required("Address is a Required field."),
    postal_code: yup.string().required("Required field"),
    country: yup.string().required("Please choose a country"),
    password: yup
      .string()
      .matches(
        passwordMatch,
        "Please valid password. One uppercase, one lowercase, one special character and no spaces"
      )
      .required("Please set a password"),
  });

  return (
    <>
      <Header />
      <div className="registrationForm">
        <Formik
          initialValues={initialValues}
          onSubmit={(values: LoginType, actions) => {
            createNewUser(values, actions.resetForm);
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 500);
          }}
          validationSchema={validationSchema}
        >
          {(props: FormikProps<LoginType>) => {
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
                <h1 className="title">SIGN IN</h1>
                <Grid container justify="space-around" direction="row">
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
                      name="email"
                      id="email"
                      label="Email"
                      variant="outlined"
                      value={values.email}
                      type="text"
                      helperText={
                        errors.email && touched.email ? errors.email : null
                      }
                      error={errors.email && touched.email ? true : false}
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
                    <Link to="/">
                      <TextButton
                        disabled={isSubmitting}
                        color="primary"
                        text="LOG IN"
                      />
                    </Link>
                    <hr></hr>
                    <Link to="/registrate">
                      <TextButton color="primary" text="REGISTRATE HERE" />
                    </Link>
                    {displayFormStatus && (
                      <div className="formStatus">
                        {formStatus.type === "error" ? (
                          <p>{formStatus.message}</p>
                        ) : formStatus.type === "success" ? (
                          <p>{formStatus.message}</p>
                        ) : null}
                      </div>
                    )}
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
