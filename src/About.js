import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function About() {
    return (
        <main>
            <Container maxWidth="lg" sx={{ pt: 6 }}>
                <Typography component="h1"
                    variant="h3"
                    align="center"
                    gutterBottom
                >About Us</Typography>
                <Typography variant="h6" align="center" color="text.secondary" paragraph gutterBottom >
                    Kiyummi Games (formerly AGM Studios) was created in 2019 by a small group of friends during the development of our first game, Gun Witch. Since the release of Gun Witch, we've created many other games, especially in the visual novel format. Right now, we are a 2D-focused studio, but we plan to expand to 3D development soon!
                </Typography>

                <Typography variant="h6" align="center" color="text.secondary" paragraph gutterBottom >
                    If you enjoy our works, please consider donating to support us!
                </Typography>
            </Container>

        </main>
    );
}

export default About;
