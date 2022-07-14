import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

function Copyright() {
    return (
        <Typography variant="body1" color="text.secondary" align="center">
            {'© Kiyummi Games '}
            {new Date().getFullYear()}
        </Typography>
    );
}

function Footer() {

    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Divider />
            <Container maxWidth="lg" sx={{ pt: 2 }}>
                <Stack direction="row" spacing={2} justifyContent="center"
                    alignItems="center" sx={{ pb: 2 }}>

                    <Button variant="outlined" href="https://twitter.com/dev_witch" target="_blank" rel="noopener noreferrer" startIcon={<TwitterIcon />}>
                        Twitter
                    </Button>

                    <Button variant="outlined" href="https://ko-fi.com/kiyummi" target="_blank" rel="noopener noreferrer" startIcon={<LocalCafeIcon />}>
                        Ko-fi
                    </Button>
                </Stack>
                <Copyright />
            </Container>
        </Box>
    );
}

export default Footer;