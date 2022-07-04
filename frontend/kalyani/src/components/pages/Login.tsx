import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Form, Formik, FormikProps } from "formik";
import * as H from "history";
import { FC, useContext, useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Context from "../../context/SnackbarContext";
import api from "../../services/ApiService";
import "../../styling/Registration.css";
import { LoginType } from "../../types/LoginType";
import TextButton from "../atoms/Button";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";

export interface RouteComponentProps {
  history?: H.History;
}

const Login: FC<RouteComponentProps> = ({ history }): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const { displaySnackbarMessage } = useContext(Context);

  const initialValues: LoginType = {
    customerEmail: "",
    password: "",
  };

  const login = (data: any) => {
    let params = {
      customerEmail: data.customerEmail,
      password: data.password,
    };
    api
      .post("/customer/signin", params)
      .then((response) => {
        displaySnackbarMessage("Logged in successfully!", "success");
        localStorage.setItem("auth", response.data.token);
        setTimeout(() => {
          if (history !== undefined) {
            history.push("/");
          }
        }, 3000);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          displaySnackbarMessage("Log in failed!", "error");
        }
        if (history !== undefined) {
          history.push("/login");
        }
      });
  };

  const validationSchema = yup.object().shape({
    customerEmail: yup.string().email("Email is invalid").required("Required"),
    password: yup.string().required("Please enter your password"),
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
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
                      name="customerEmail"
                      id="customerEmail"
                      label="Email"
                      variant="outlined"
                      value={values.customerEmail}
                      type="text"
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
                      style={{ backgroundColor: "white" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              style={{
                                backgroundColor: "#b2dfdb",
                              }}
                              title={
                                showPassword ? "hidePassword" : "showPassword"
                              }
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                      name="password"
                      id="password"
                      label="Password"
                      variant="outlined"
                      value={values.password}
                      type={showPassword ? "text" : "password"}
                      helperText={
                        errors.password && touched.password
                          ? errors.password
                          : null
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
                        onClick={() => login(values)}
                      />
                    </Link>
                    <hr></hr>
                    <Link to="/registrate">
                      <TextButton color="primary" text="REGISTRATE HERE" />
                    </Link>
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

export default Login;
