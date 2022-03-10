import { Box, Container, Typography, Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import React from 'react'
import CustomizedAccordions from '../copmponents/Accordion'
import ImageCollage from '../copmponents/ImageCollage'
import BasicModal from '../copmponents/Modal'

const Tour = () => {
    return (
        <Container sx={{ width: 900, paddingBottom:3 }}>
            <Typography variant='h3' component='h1' marginTop={3}>Explore the World in Vegas</Typography>
            <Box marginTop={3} sx={{ display: 'flex' }}>
                <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" height={325} alt='image' />
                <ImageCollage/>
            </Box>
            <Box>
                <Typography variant='h6' component='h4' marginTop={3}>About this ticket</Typography>
                <Typography variant='paragraph' component='p' marginTop={3}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus quia recusandae deleniti praesentium veritatis consectetur rem ex perspiciatis corrupti illo mollitia in voluptatum quos explicabo repellat, blanditiis eos accusamus exercitationem porro asperiores.
                    Eveniet distinctio iure veritatis a libero sequi molestias!
                </Typography>
            </Box>
            <Box>
                <Typography variant='h6' component='h4' marginTop={3} marginBottom={3}>Frequently asked questions</Typography>
                <CustomizedAccordions/>
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <BasicModal />
                </BottomNavigation>
            </Paper>
        </Container>
    )
}

export default Tour