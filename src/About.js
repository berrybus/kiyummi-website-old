import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <main>
      <Container maxWidth="lg" sx={{ pt: 6 }}>
        <Typography
          component="h1"
          fontWeight="bold"
          variant="h3"
          align="center"
          gutterBottom
        >
          About Us
        </Typography>
        <Typography variant="h6" align="center" paragraph gutterBottom>
          Kiyummi Games (formerly AGM Studios) was created in 2019 by a small
          group of friends during the development of our first game, Gun Witch.
          Since the release of Gun Witch, we've created many other games,
          especially in the visual novel format. Right now, we are a 2D-focused
          studio, but we plan to expand to 3D development soon!
        </Typography>

        <Typography variant="h6" align="center" paragraph gutterBottom>
          If you enjoy our works, please consider donating to support us!
        </Typography>

        <Box sx={{ pt: 12 }}></Box>
        <Typography
          component="h1"
          fontWeight="bold"
          variant="h3"
          align="center"
          gutterBottom
        >
          Join Us
        </Typography>
        <Typography variant="h6" align="center" paragraph gutterBottom>
          Are you excited about working in a fast-paced, cross-functional team?
          If so, please{" "}
          <a href="mailto:kiyummigames@gmail.com" target="_blank">
            email us
          </a>{" "}
          for any business inquiries or to join our amazing game studio!
        </Typography>
      </Container>
    </main>
  );
}

export default About;
