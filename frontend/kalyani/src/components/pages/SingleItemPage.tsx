import {
  Autocomplete,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { clothingProps } from "../../Props/Clothing";
import ClothingService from "../../services/ClothingService";
import "../../styling/SingleItem.css";
import TextButton from "../atoms/Button";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import CartService from "../../services/CartService";

export default function SingleProductPage(_clothingId: any) {
  const { clothingId } = useParams();
  const [clothing, setClothing] = useState<clothingProps>({} as clothingProps);
  const [size, setSize] = useState([]);

  const getSize = () => {
    ClothingService.getAllClothingSize()
      .then((res) => setSize(res.data))
      .catch((err) => err);
  };

  const addClothing = () => {
    return CartService.addClothingToCart(clothingId);
  };

  useEffect(() => {
    if (clothingId !== undefined) {
      ClothingService.getClothingById(clothingId)
        .then((res) => {
          setClothing(res.data);
        })
        .then(getSize);
    }
  }, [clothingId]);

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
          alt={clothing.clothingName}
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
                <Typography variant="h5" className="description">
                  CHF {clothing.clothingPrice}
                </Typography>
              </Grid>
              <Grid item>
                <Autocomplete
                  id="clothingSize"
                  options={size}
                  renderInput={(params) => (
                    <TextField {...params} label="Size" variant="outlined" />
                  )}
                />
              </Grid>

              <Grid item className="button">
                <TextButton
                  color="primary"
                  text="Add to cart"
                  className="buttonStyle"
                  onClick={() => addClothing()}
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
                <Typography variant="body1" className="description">
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
