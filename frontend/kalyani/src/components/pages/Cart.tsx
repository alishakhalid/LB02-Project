import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { CartType } from "../../types/CartType";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Grid, Paper } from "@mui/material";
import TextButton from "../atoms/Button";

export const Cart = ({
  clothingImage,
  clothingName,
  clothingSize,
  shippingPrice,
  totalPrice,
  amount,
}: CartType) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justifySelf={"flex-start"}
        style={{ margin: "3vh" }}
      >
        <Grid item xs={7}>
          <Typography component="div" variant="h4" className="text">
            Cart
          </Typography>
          <Paper style={{ backgroundColor: "black" }}>
            <Card sx={{ display: "flex", border: "2px", borderColor: "black" }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={clothingImage}
                alt="Cart Item"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {clothingName}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    style={{ textAlign: "left" }}
                  >
                    Size: {clothingSize}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    style={{ textAlign: "left" }}
                  >
                    Quantiy: {amount}
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <IconButton aria-label="delete">
                    <DeleteOutlinedIcon
                      sx={{ height: 38, width: 38 }}
                      style={{
                        alignItems: "right",
                        color: "red",
                        alignSelf: "right",
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          </Paper>
        </Grid>
        <Grid item sm={5}>
          <Typography component="div" variant="h4" className="text">
            Paying process
          </Typography>
          <Paper>
            <Typography variant="h4" gutterBottom className="text">
              Total Price
            </Typography>
            <Typography variant="h6" gutterBottom className="text">
              Sub total: {totalPrice}
            </Typography>
            <Typography variant="h6" gutterBottom className="text">
              Shipping costs: {shippingPrice}
            </Typography>
            <Typography variant="h6" gutterBottom className="text">
              Total (incl. tax): {totalPrice + shippingPrice}
            </Typography>
            <TextButton text={"Pay"} color={"success"} className="payButton" />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default Cart;
