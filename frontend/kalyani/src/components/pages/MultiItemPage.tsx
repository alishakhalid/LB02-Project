import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { clothingProps } from "../../Props/Clothing";
import ClothingService from "../../services/ClothingService";
import clothingType, { ClothingEnumType } from "../../types/ClothingEnum";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import Clothes from "./Clothes";

const SearchStyle = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#b2dfdb",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  marginBottom: "5%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function AllClothesPage() {
  const [clothes, setClothes] = useState<clothingProps[]>([]);
  const [clothingtype, setClothingType] = useState<ClothingEnumType>();
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    ClothingService.getAllClothes().then((resolve) => {
      setClothes(resolve.data);
      setisLoading(false);
    });
    ClothingService.getClothingTypes().then((res) => {
      setClothingType(res.data);
    });
  }, []);

  return (
    <>
      <div className="allProducts">
        <Header />
        <Container>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12} style={{ marginTop: "2%" }}>
              {isLoading && <h1>Page is loading...</h1>}
              <SearchStyle>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                />
              </SearchStyle>
              <Grid container justifyContent="center" spacing={2}>
                {clothes
                  .filter((clothing) => {
                    if (search === "") {
                      return clothing;
                    } else if (
                      clothing.clothingName
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return clothing;
                    }
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
