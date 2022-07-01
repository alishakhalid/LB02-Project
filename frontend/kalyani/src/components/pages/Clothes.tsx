import {
  CardContent,
  CardMedia,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { clothingProps } from "../../Props/Clothing";
import TextButton from "../atoms/Button";
import { Link } from "react-router-dom";

export const Clothes = ({
  clothingId,
  clothingDescription,
  clothingImage,
  clothingName,
  clothingPrice,
  clothingType,
}: clothingProps) => {
  return (
    <Card>
      <div className="card">
        <CardMedia
          component="img"
          image={clothingImage}
          alt="Clothing piece"
          height="250"
        />
        <CardContent className="card-body">
          <Typography variant="h4" className="cardTitle">
            {clothingName}{" "}
          </Typography>
          <Typography className="card-text" variant="body2" color="secondary">
            {clothingDescription}
          </Typography>
          <Typography>Price CHF: {clothingPrice}</Typography>
          {/* <Typography>Clothing Category: {clothingType}</Typography> */}
        </CardContent>
        <Link to={"/clothes/category/" + clothingId}>
          <TextButton text="View" color="primary" />
        </Link>
      </div>
    </Card>
  );
};

export default Clothes;
