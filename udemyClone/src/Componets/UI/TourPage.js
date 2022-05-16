import React,{useEffect, useState} from 'react'
import AuthService from '../services/AuthService'
import {Box,Alert,CardMedia,Card,CardContent,Typography,CardActions,Button,Grid} from '@mui/material'
const TourPage=()=>{
  const [state,setState]=useState([])
    useEffect(()=>{
        (
            async()=>{
                try{
                    let response=await AuthService.getallTours()
                    console.log("tours",response)
                    setState(response.data.user)
                }
                catch(e){
                    console.log("tour",e)
                }
            }
        )()
    },[])
    return (
        <Box sx={{mt:8}}>
          <Grid container>
            <Grid item xs={12}>
             <Grid container>
             {
          state && state.map((res)=>{
            return (
              <React.Fragment key={res.id}>
                <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {res.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                </Grid>
            </React.Fragment>
            )
          })
        }
             </Grid>
            </Grid>
          </Grid>
        </Box>
    )
}

export default TourPage