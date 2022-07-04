import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import PsychologyIcon from "@mui/icons-material/Psychology";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import { Grid } from "@mui/material";
import { Container } from "react-bootstrap";

export default function AboutUs() {
  return (
    <>
      <Header />
      <Container>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12} style={{ marginTop: "2%" }}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <img
                  src="https://i.pinimg.com/originals/90/b1/05/90b10558027511643312ab9a9511a4f4.jpg"
                  alt="Nuwera"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Designer, visionary, artist, Nuwera and Alisha reinvented fashion by
            transcending its conventions, creating an uncomplicated luxury that
            changed women’s lives forever. They followed no rules, epitomising
            the very modern values of freedom, passion and feminine elegance by
            representing their culture.
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <PsychologyIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Our Vision
            </Typography>
            <Typography>Fashion with long-term value</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Quality is a pillar of KALYANI’s success. Each of the Group’s 75
            Maisons cultivates the highest level of quality in their products
            and services, not simply to maintain it year after year but also to
            elevate it as we continually set even higher standards. We are
            privileged in being able to offer the highest quality products
            thanks to the exceptional savoir-faire or our artisans. We embody
            everything that is most noble and accomplished in the world of
            craftsmanship, paying meticulous attention to detail and striving
            for perfection.
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <DoneAllIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Excellence
            </Typography>
            <Typography>Quality {">"} Quantity</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            The combination of creativity and innovation is the foundation of
            our Brand. This is what enables them to achieve the delicate balance
            needed to continually renew our offer, resolutely looking to the
            future while respecting their unique heritage. Modernity fuses with
            history to create timeless products. Creativity and innovation are
            part of KALYANI’s DNA. They have always been key to our Maisons’
            success over the years and invite exploration of the infinite
            possibilities offered by new technologies, a major growth path for
            the Group.
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <EmojiObjectsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Creativity
            </Typography>
            <Typography>Dreams come true!</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Footer />
    </>
  );
}
