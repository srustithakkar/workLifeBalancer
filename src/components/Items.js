import React from 'react';
import storeItems from "./assets/storeItems.json"
import Grid from '@mui/material/Grid';
import { Card, CardContent, Typography, CardMedia, CardActions, Button } from '@mui/material';
import { useSelector } from 'react-redux';

const Items = () => {
  const points = useSelector((state) => state);

  return (
    <div >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {storeItems.map((e, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 18, fontWeight: "700" }} color="text.secondary" gutterBottom>
                  {e.name}
                </Typography>
                <CardMedia
                  component="img"
                  height="194"
                  image={e.image}
                  alt={e.name}
                />
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button size="small" sx={{ fontWeight: "700" }}  >{e.price} Points</Button>
                <Button size="small" disabled={e.price <= points ? false : true} variant="contained">Buy now</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

    </div>
  );
};

export default Items;
