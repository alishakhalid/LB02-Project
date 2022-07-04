import { Container } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "../../styling/Footer.css";
import Link from "@mui/material/Link";
import { Grid, IconButton } from "@mui/material";

export default function Footer() {
  return (
    <div className="footerWrapper">
      <div>
        <footer className="footer">
          <Container>
            <Grid direction="column" md={12}>
              <IconButton>
                <a href="https://de-de.facebook.com/">
                  <FacebookIcon />
                </a>
              </IconButton>
              <IconButton>
                <a href="https://www.instagram.com/">
                  <InstagramIcon />
                </a>
              </IconButton>
              <IconButton>
                <a href="https://www.pinterest.ch/">
                  <PinterestIcon />
                </a>
              </IconButton>
            </Grid>
            <Grid>
              <Link href="/aboutus" underline="hover" style={{ color: "#fff" }}>
                {"ABOUT US "}
              </Link>
              <Link href="/faq" underline="hover" style={{ color: "#fff" }}>
                {"FAQ"}
              </Link>
              <Link href="/return" underline="hover" style={{ color: "#fff" }}>
                {"REQUEST A RETURN"}
              </Link>
              <Link
                href="/return/policy"
                underline="hover"
                style={{ color: "#fff" }}
              >
                {"RETURNS POLICY"}
              </Link>
              <Link
                href="/shipping"
                underline="hover"
                style={{ color: "#fff" }}
              >
                {"SHIPPING POLICY"}
              </Link>
              <Link href="/privacy" underline="hover" style={{ color: "#fff" }}>
                {"PRIVACY POLICY"}
              </Link>
              <Link
                href="/terms-conditions"
                underline="hover"
                style={{ color: "#fff" }}
              >
                {"TERMS & CONDITIONS"}
              </Link>
            </Grid>
          </Container>
        </footer>
      </div>
    </div>
  );
}
