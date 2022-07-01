import Header from "../molecules/Header";
import Footer from "../organisms/Footer";
import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { SearchContext } from "../../context/SearchContext";
import { clothingProps } from "../../Props/Clothing";
import Clothes from "./Clothes";
import { Box, Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import ClothingService from "../../services/ClothingService";
import clothingType from "../../types/ClothingEnum";
import { ClothingEnumType } from "../../types/ClothingEnum";

function AllClothesPage() {
  const [clothes, setClothes] = useState<clothingProps[]>([]);
  const [clothingtype, setClothingType] = useState<ClothingEnumType>();
  const [isLoading, setisLoading] = useState<boolean>(true);
  const { search } = useContext(SearchContext);

  useEffect(() => {
    ClothingService.getAllClothes().then((resolve) => {
      setClothes(resolve.data);
      setisLoading(false);
    });
    ClothingService.getClothingTypes().then((res) => {
      setClothingType(res.data);
    });
  }, []);

  const clothingPiece = [
    {
      clothing_image:
        "https://i.pinimg.com/736x/2c/f2/14/2cf214da02daa83d034aa91114fd530a.jpg",
      clothing_name: "Kameez",
      clothing_price: 30,
      clothing_type: "FORMAL",
    },
    {
      clothing_image:
        "https://i.pinimg.com/736x/2c/f2/14/2cf214da02daa83d034aa91114fd530a.jpg",
      clothing_name: "Kameez",
      clothing_price: 30,
      clothing_type: "FORMAL",
    },
    {
      clothing_image:
        "https://i.pinimg.com/736x/2c/f2/14/2cf214da02daa83d034aa91114fd530a.jpg",
      clothing_name: "Kameez",
      clothing_price: 30,
      clothing_type: "FORMAL",
    },
    {
      clothing_image:
        "https://i.pinimg.com/736x/2c/f2/14/2cf214da02daa83d034aa91114fd530a.jpg",
      clothing_name: "Kameez",
      clothing_price: 30,
      clothing_type: "FORMAL",
    },
    {
      clothing_image:
        "https://i.pinimg.com/736x/2c/f2/14/2cf214da02daa83d034aa91114fd530a.jpg",
      clothing_name: "Kameez",
      clothing_price: 30,
      clothing_type: "FORMAL",
    },
    {
      clothing_image:
        "https://i.pinimg.com/736x/2c/f2/14/2cf214da02daa83d034aa91114fd530a.jpg",
      clothing_name: "Kameez",
      clothing_price: 30,
      clothing_type: "FORMAL",
    },
  ];

  return (
    <>
      <div className="allProducts">
        <Header />
        <Container>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12} style={{ marginTop: "2%" }}>
              {isLoading && <h1>Page is loading...</h1>}
              <Grid container justifyContent="center" spacing={2}>
                {clothes
                  .filter((clothing) => {
                    return (
                      clothing.clothingName.toLowerCase().includes(search) ||
                      !search
                    );
                  })
                  .map((clothing: clothingProps) => {
                    return (
                      <Grid item>
                        <Clothes
                          clothingImage={clothing.clothingImage}
                          clothingName={clothing.clothingName}
                          clothingPrice={clothing.clothingPrice}
                          clothingType={clothingType}
                        />
                      </Grid>
                    );
                  })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default AllClothesPage;
