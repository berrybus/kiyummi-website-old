import * as React from "react";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import gunwitch_banner from "./gunwitch.png";
import mabel_banner from "./mabel.png";
import rose_banner from "./rose.png";
import fairyside from "./fairyside.png";
import artbook_cover from "./artbook_cover.png";
import artbook from "./artbook.pdf";

function Home() {
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
          Our Games
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Kiyummi Games is a small studio dedicated to creating video games with
          fun gameplay loops and immersive stories
        </Typography>
      </Container>
      <Divider sx={{ pt: 6 }} />

      <Container sx={{ py: 6 }} maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={8} md={8}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardActionArea
                href="https://store.steampowered.com/app/2174600/Fairyside/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  image={fairyside}
                  alt="Fairyside banner"
                />
              </CardActionArea>
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ pb: 1 }}
                >
                  <Typography variant="h5" fontWeight="bold" component="h2">
                    Fairyside
                  </Typography>
                  <Chip label="New!" color="primary" />
                </Stack>
                <Typography>
                  A dark fantasy rogue-like shoot-em-up with bullet hell and RPG
                  elements featuring cute pixel art, visual novel interludes,
                  and story-driven gameplay. Join Shirley in her journey to
                  learn magic and survive Redwood Academy!
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://store.steampowered.com/app/2174600/Fairyside/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Steam
                </Button>
                <Button
                  size="small"
                  href="https://kiyummi.itch.io/fairyside"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Itch.io
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ py: 6 }} maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardActionArea
                href="https://store.steampowered.com/app/1502790/Gun_Witch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  image={gunwitch_banner}
                  alt="Gun Witch banner"
                />
              </CardActionArea>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight="bold"
                  component="h2"
                >
                  Gun Witch
                </Typography>
                <Typography>
                  Help Beretta become the best witch ever in this 2D action
                  platformer shoot 'em up! She's going on an adventure to beat
                  up monsters, talk to cute NPCs, and discover the dark history
                  of Luninsula all while making lifelong friends.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://store.steampowered.com/app/1502790/Gun_Witch/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Steam
                </Button>
                <Button
                  size="small"
                  href="https://kiyummi.itch.io/gun-witch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Itch.io
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardActionArea
                href="https://kiyummi.itch.io/the-strange-case-of-sophias-daughter"
                target="_blank"
              >
                <CardMedia
                  component="img"
                  image={mabel_banner}
                  alt="Mabel banner"
                />
              </CardActionArea>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight="bold"
                  component="h2"
                >
                  The Strange Case Of Sophia's Daughter
                </Typography>
                <Typography>
                  Tony was living a perfectly lovely high school life until his
                  childhood friend comes back to haunt him -- literally. The
                  dead girl has seemingly put a curse on him, making Tony's life
                  a living nightmare. How will he manage his guilt, misfortune,
                  and blossoming feelings for his once-forgotten friend?
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://kiyummi.itch.io/the-strange-case-of-sophias-daughter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Itch.io
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardActionArea
                href="https://kiyummi.itch.io/the-knight-of-the-golden-rose"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  image={rose_banner}
                  alt="Golden Rose banner"
                />
              </CardActionArea>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight="bold"
                  component="h2"
                >
                  The Knight of the Golden Rose
                </Typography>
                <Typography>
                  In medieval England, Cecilia dreams of becoming a sorcerer and
                  living out the stories of knights and dragons that she has
                  only read about in books. When her childhood friend, Anselm,
                  reveals that he is related to the king of England, the two
                  embark on a journey across the country to discover the realm's
                  lost magic and grow closer along the way.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://kiyummi.itch.io/the-knight-of-the-golden-rose"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Itch.io
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ pt: 6 }} />
      <Container maxWidth="lg" sx={{ pt: 6 }}>
        <Typography
          component="h4"
          fontWeight="bold"
          variant="h4"
          align="center"
          gutterBottom
        >
          Extra Goodies
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Other cool things we've released that you should check out
        </Typography>
      </Container>
      <Divider sx={{ pt: 6 }} />
      <Container maxWidth="lg">
        <Card sx={{ display: "flex", mt: 6 }}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={4}>
              <Box sx={{ p: 4 }}>
                <a href={artbook} target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    sx={{ width: "100%" }}
                    image={artbook_cover}
                    alt="Artbook cover"
                  />
                </a>
              </Box>
            </Grid>
            <Grid item sm={12} md={8}>
              <Box sx={{ display: "flex", flexDirection: "column", m: 6 }}>
                <Typography
                  component="h4"
                  fontWeight="bold"
                  variant="h4"
                  align="center"
                  gutterBottom
                >
                  Fairyside Artbook
                </Typography>
                <Typography variant="h6" align="center" paragraph gutterBottom>
                  We've released an artbook for our newest game, Fairyside,
                  featuring concept art, fanart, and sketches of all your
                  favorite characters. We were originally planning to sell the
                  artbook as DLC but decided to release it for free instead so
                  that everyone can enjoy it!
                </Typography>
                <Typography variant="h6" align="center" paragraph gutterBottom>
                  Get it{" "}
                  <a href={artbook} target="_blank" rel="noopener noreferrer">
                    here
                  </a>
                  !
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>

      <Divider sx={{ pt: 6 }} />
      <Container maxWidth="lg" sx={{ pt: 6 }}>
        <Typography
          component="h4"
          fontWeight="bold"
          variant="h4"
          align="center"
          gutterBottom
        >
          Stay Updated With Us!
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          For all the latest news and exciting dev blogs, follow us at{" "}
          <a rel="me" href="https://mastodon.gamedev.place/@kiyummi">
            Mastodon!
          </a>
        </Typography>
      </Container>
    </main>
  );
}

export default Home;
