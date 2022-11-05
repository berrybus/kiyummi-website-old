import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import { Timeline } from 'react-twitter-widgets'
import gunwitch_banner from './gunwitch.png';
import mabel_banner from './mabel.png';
import rose_banner from './rose.png';
import fairyside from './fairyside.png';
import artbook_cover from './artbook_cover.png';
import artbook from './artbook.pdf';

function Home() {
    return (
        <main>
            <Container maxWidth="lg" sx={{ pt: 6 }}>
                <Typography component="h1"
                    variant="h3"
                    align="center"
                    gutterBottom
                >Our Games</Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    At Kiyummi Games, we strive to create video games with the best player experience. Check out our awesome selection!
                </Typography>
            </Container>
            <Container sx={{ py: 6 }} maxWidth="lg">
                <Grid container spacing={4} alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={8} md={8}>
                        <Card
                            sx={{ height: "100%", display: 'flex', flexDirection: 'column' }}
                        >
                            <CardActionArea href="https://store.steampowered.com/app/2174600/Fairyside/" target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    component="img"
                                    image={fairyside}
                                    alt="Fairyside banner"
                                />
                            </CardActionArea>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Fairyside
                                </Typography>
                                <Typography>
                                    A dark fantasy rogue-like shoot-em-up with bullet hell and RPG elements featuring cute pixel art, visual novel interludes, and story-driven gameplay. Join Shirley in her journey to learn magic and survive Redwood Academy!
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"
                                    href="https://store.steampowered.com/app/2174600/Fairyside/" target="_blank" rel="noopener noreferrer"
                                >Steam
                                </Button>
                                <Button size="small"
                                    href="https://kiyummi.itch.io/fairyside" target="_blank" rel="noopener noreferrer"
                                >Itch.io
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{ py: 6 }} maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: "100%", display: 'flex', flexDirection: 'column' }}
                        >
                            <CardActionArea href="https://store.steampowered.com/app/1502790/Gun_Witch/" target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    component="img"
                                    image={gunwitch_banner}
                                    alt="Gun Witch banner"
                                />
                            </CardActionArea>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Gun Witch
                                </Typography>
                                <Typography>
                                    Help Beretta become the best witch ever in this 2D action platformer shoot 'em up! She's going on an adventure to beat up monsters, talk to cute NPCs, and discover the dark history of Luninsula all while making lifelong friends.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"
                                    href="https://store.steampowered.com/app/1502790/Gun_Witch/" target="_blank" rel="noopener noreferrer"
                                >Steam
                                </Button>
                                <Button
                                    size="small"
                                    href="https://kiyummi.itch.io/gun-witch" target="_blank"
                                    rel="noopener noreferrer"
                                >Itch.io
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: "100%", display: 'flex', flexDirection: 'column' }}
                        >
                            <CardActionArea href="https://kiyummi.itch.io/the-strange-case-of-sophias-daughter" target="_blank">
                                <CardMedia
                                    component="img"
                                    image={mabel_banner}
                                    alt="Mabel banner"
                                />
                            </CardActionArea>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    The Strange Case Of Sophia's Daughter
                                </Typography>
                                <Typography>
                                    Tony was living a perfectly lovely high school life until his childhood friend comes back to haunt him -- literally. The dead girl has seemingly put a curse on him, making Tony's life a living nightmare. How will he manage his guilt, misfortune, and blossoming feelings for his once-forgotten friend?
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    href="https://kiyummi.itch.io/the-strange-case-of-sophias-daughter" target="_blank"
                                    rel="noopener noreferrer"
                                >Itch.io
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: "100%", display: 'flex', flexDirection: 'column' }}
                        >
                            <CardActionArea href="https://kiyummi.itch.io/the-knight-of-the-golden-rose" target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    component="img"
                                    image={rose_banner}
                                    alt="Golden Rose banner"
                                />
                            </CardActionArea>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    The Knight of the Golden Rose
                                </Typography>
                                <Typography>
                                    In medieval England, Cecilia dreams of becoming a sorcerer and living out the stories of knights and dragons that she has only read about in books. When her childhood friend, Anselm, reveals that he is related to the king of England, the two embark on a journey across the country to discover the realm's lost magic and grow closer along the way.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    href="https://kiyummi.itch.io/the-knight-of-the-golden-rose" target="_blank"
                                    rel="noopener noreferrer"
                                >Itch.io
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="xl" >
                <Grid container spacing={12}>
                    <Grid item xs={12} md={6}>
                        <Typography component="h1"
                            variant="h3"
                            align="center"
                            gutterBottom
                        >The Fairyside Artbook</Typography>
                        <Typography variant="h6" align="center" color="text.secondary" paragraph gutterBottom>
                            We've released an artbook for our newest game, Fairyside, featuring concept art, fanart, and sketches of all your favorite characters. We were originally planning to sell the artbook as DLC but decided to release it for free instead so that everyone can enjoy it!
                        </Typography>

                        <Typography variant="h6" align="center" color="text.secondary" paragraph gutterBottom>
                            Get it <a href={artbook} target="_blank">here</a>!
                        </Typography>

                        <a href={artbook} target="_blank">
                            <Box component="img"
                                sx={{ width: "100%", my: 1 }}
                                src={artbook_cover}
                                alt="Fairyside artbook cover">
                            </Box>
                        </a>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography component="h1"
                            variant="h3"
                            align="center"
                            gutterBottom
                        >Newsfeed</Typography>
                        <Typography variant="h6" align="center" color="text.secondary" paragraph gutterBottom>
                            Kiyummi Games updates and developer blog. Follow  us for the latest news!
                        </Typography>
                        <Timeline
                            dataSource={{ sourceType: "profile", screenName: "dev_witch" }}
                            options={{ width: "100%", height: "1200" }}
                        />
                    </Grid>
                </Grid>
            </Container>

        </main>
    );
}

export default Home;
