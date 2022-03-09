import React from 'react'
import { Box, Typography, Grid, Paper, Rating, createTheme, ThemeProvider } from '@mui/material';
import { AccessTime } from '@mui/icons-material';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [{
                props: { variant: 'body2' }, style: { fontSize: 11 }
            }, {
                props: { variant: 'body3' }, style: { fontSize: 9 }
            },]
        }
    }
})

const TourCard = () => {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3} square >
                    <img
                        src="https://cdn.pixabay.com/photo/2019/04/29/07/51/water-4165425__480.jpg"
                        alt=""
                        className='img' />
                    <Box paddingX={1}>
                        <Typography variant='subtitle1' component='h2'>Going to waterfalls</Typography>
                        <Box
                            sx={{ display: 'flex', alignItems: 'center' }}
                        >
                            <AccessTime sx={{ width: 12.5 }}></AccessTime>
                            <Typography variant='body2' component='p' marginLeft={0.5}>5 hours</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }} marginTop={3}>
                            <Rating name="read-only" value={4.4} precision={0.2} readOnly size='small' />
                            <Typography variant='body2' component='p' marginLeft={0.5}>4.4</Typography>
                            <Typography variant='body3' component='p' marginLeft={1.5}>(365 reviews)</Typography>
                        </Box>
                        <Box>
                            <Typography variant='h6' component='h3' marginTop={0}>From C 125$</Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    )
}

export default TourCard