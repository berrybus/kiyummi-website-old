import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import { FaDiscord } from "react-icons/fa";
import { FaMastodon } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Copyright() {
  return (
    <Typography variant="body1" color="text.secondary" align="center">
      {"© Kiyummi Games "}
      {new Date().getFullYear()}
    </Typography>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ pb: 2 }}
        >
          <Button
            variant="outlined"
            href="https://mastodon.gamedev.place/@kiyummi"
            rel="me"
            startIcon={<FaMastodon />}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            Mastodon
          </Button>

          <IconButton
            href="https://mastodon.gamedev.place/@kiyummi"
            rel="me"
            aria-label="mastodon"
            size="large"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <FaMastodon fontSize="inherit" />
          </IconButton>

          <Button
            variant="outlined"
            href="https://twitter.com/dev_witch"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<TwitterIcon />}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            Twitter
          </Button>

          <IconButton
            href="https://twitter.com/dev_witch"
            target="_blank"
            aria-label="twitter"
            size="large"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <TwitterIcon fontSize="inherit" />
          </IconButton>

          <Button
            variant="outlined"
            href="https://ko-fi.com/kiyummi"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LocalCafeIcon />}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            Ko-fi
          </Button>

          <IconButton
            href="https://ko-fi.com/kiyummi"
            target="_blank"
            aria-label="ko-fi"
            size="large"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <LocalCafeIcon fontSize="inherit" />
          </IconButton>

          <Button
            variant="outlined"
            href="https://discord.gg/ke4E8Wgzpw"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<FaDiscord />}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            Discord
          </Button>

          <IconButton
            href="https://discord.gg/ke4E8Wgzpw"
            target="_blank"
            aria-label="discord"
            size="large"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <FaDiscord fontSize="inherit" />
          </IconButton>

          <Button
            variant="outlined"
            href="mailto:kiyummigames@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<AiOutlineMail />}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            Email
          </Button>

          <IconButton
            href="mailto:kiyummigames@gmail.com"
            target="_blank"
            aria-label="email"
            size="large"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <AiOutlineMail fontSize="inherit" />
          </IconButton>
        </Stack>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
