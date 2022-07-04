import { CardContent, CardMedia, Typography } from "@mui/material";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { clothingProps } from "../../Props/Clothing";
import TextButton from "../atoms/Button";

export const Clothes = ({
  clothingDescription,
  clothingImage,
  clothingName,
  clothingPrice,
  clothingType,
}: clothingProps) => {
  const { clothingId } = useParams();

  return (
    <Card>
      <div className="card">
        <CardMedia
          component="img"
          image={clothingImage}
          alt="Clothing piece"
          height="550"
        />
        <CardContent className="card-body">
          <Typography variant="h4" className="cardTitle">
            {clothingName}{" "}
          </Typography>
          <Typography className="card-text" variant="body2" color="secondary">
            {clothingDescription}
          </Typography>
          <Typography>CHF: {clothingPrice}</Typography>
        </CardContent>
        <Link to={`/clothes/formal-wear/${clothingId}`}>
          <TextButton text="View" color="primary" />
        </Link>
      </div>
    </Card>
  );
};

export default Clothes;
