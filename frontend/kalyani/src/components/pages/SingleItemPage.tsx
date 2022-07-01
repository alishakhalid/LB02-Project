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
import { Link, useParams } from "react-router-dom";
import TextButton from "../atoms/Button";
import "../../styling/SingleItem.css";
import { useEffect, useState } from "react";
import ClothingService from "../../services/ClothingService";
import { v4 as uuid } from "uuid";

const size = ["S", "M", "L"];

const userid = uuid();

export default function SingleProductPage() {
  const { id } = useParams<{ id: typeof userid }>();
  const [clothing, setClothing] = useState<clothingProps>({} as clothingProps);

  useEffect(() => {
    if (id !== undefined) {
      ClothingService.getClothingById(id).then((res) => {
        setClothing(res.data);
      });
    }
  }, [id]);

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
          src={clothing.clothingImage}
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
                <Typography variant="h4">{clothing.clothingName}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption" className="description">
                  {clothing.clothingPrice}
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
                  {clothing.clothingDescription}
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
