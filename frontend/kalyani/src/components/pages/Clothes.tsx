import { CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { clothingProps } from "../../Props/Clothing";
import TextButton from "../atoms/Button";
import { Link } from "react-router-dom";

export const Clothes = ({
  id,
  clothing_description,
  clothing_image,
  clothing_name,
  clothing_price,
  clothing_type,
}: clothingProps) => {
  return (
    <Card>
      <div className="card">
        <CardMedia
          component="img"
          image={clothing_image}
          alt="Clothing piece"
          height="250"
        />
        <CardContent className="card-body">
          <Typography variant="h4" className="cardTitle">
            {clothing_name}{" "}
          </Typography>
          <Typography className="card-text" variant="body2" color="secondary">
            {clothing_description}
          </Typography>
          <Typography>Price CHF: {clothing_price}</Typography>
          <Typography>Clothing Category: {clothing_type}</Typography>
        </CardContent>
        <Link to={"/clothes/" + id}>
          <TextButton text="View" color="primary" />
        </Link>
      </div>
    </Card>
  );
};

export default Clothes;
