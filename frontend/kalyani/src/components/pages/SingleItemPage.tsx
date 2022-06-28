import * as React from "react";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Header from "../molecules/Header";
import Footer from "../organisms/Footer";
import Clothes from "./Clothes";
import { clothingProps } from "../../Props/Clothing";
import {
  Autocomplete,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import TextButton from "../atoms/Button";
import "../../styling/SingleItem.css";

const size = ["S", "M", "L"];

export default function SingleProductPage() {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: { md: "4%" },
          marginBottom: { md: "4%", xs: "5%" },
          alignItems: "center",
          bgcolor: "background.paper",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: 1,
          fontWeight: "bold",
          marginTop: "5%",
        }}
      >
        <Box
          component="img"
          sx={{
            height: "auto",
            maxWidth: "100%",
            position: "left",
          }}
          alt="Iqra Aziz"
          src="https://i.pinimg.com/736x/2c/f2/14/2cf214da02daa83d034aa91114fd530a.jpg"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            m: 3,
            minWidth: { md: 350 },
          }}
        >
          <Container style={{ marginBottom: "25%" }}>
            <div className="Singlecard"></div>
            <Grid item xs={12} direction="column">
              <Grid item>
                <Typography variant="h4">Kameez</Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption" className="description">
                  CHF 30.20
                </Typography>
              </Grid>
              <Grid item>
                <Autocomplete
                  style={{ borderColor: "black" }}
                  disablePortal
                  id="country"
                  options={size}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Size"
                      variant="outlined"
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item className="button">
                <TextButton
                  color="primary"
                  text="Add to cart"
                  className="buttonStyle"
                />
              </Grid>
              <Grid item className="button">
                <Link to="/checkout">
                  <TextButton
                    color="primary"
                    text="Buy now"
                    className="buttonStyle"
                  />
                </Link>
              </Grid>
              <Grid item direction="column">
                <Typography variant="h4">Description</Typography>
                <Typography variant="caption" className="description">
                  Lambi Kameez
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
