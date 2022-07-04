import { ImageListItemBar } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import TextButton from "../atoms/Button";
import Header from "../molecules/Header";
import { itemData } from "../molecules/HomepageData";
import Footer from "../molecules/Footer";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <>
      <Header />
      <ImageList variant="quilted" cols={4} gap={0}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            style={{ height: "auto", maxWidth: "100%" }}
          >
            <img
              {...srcset(item.img, 12, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              className="image"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 100%, rgba(0,0,0,0) 100%)",
              }}
              title={item.title}
              position="top"
              actionIcon={
                <Link to="/clothes/formal-wear">
                  <TextButton text="VIEW" color="primary" />
                </Link>
              }
              actionPosition="left"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Footer />
    </>
  );
}
