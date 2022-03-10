import React from 'react'
import TourCard from '../copmponents/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cities from '../data.json'
import { Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    return (
        <div className="App">
            <Container sx={{ marginY: 5 }}>
                {cities.map((city) => {
                    const key = uuidv4()
                    return (
                        <>
                            <Typography
                                variant='h4'
                                component='h2'
                                key={key + city.name}
                                marginTop={5}
                                marginBottom={3}>Top {city.name} Tours</Typography>
                            <Grid container spacing={5}>
                                {city.tours.map((tour) => (<TourCard tour={tour} key={tour.id + key}></TourCard>))}
                            </Grid>
                        </>
                    )
                })}

            </Container>
        </div >
  )
}

export default Home