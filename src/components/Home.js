import React from 'react';
import WorkLifeBalance from "./WorkLifeBalance"
import WorkLifeBalanceChart from './chart/WorkLifeBalanceChart';
import {
  Typography,
  Grid,
  Box
} from '@mui/material';
import WorkTimer from './WorkTimer';
import PointsChart from './chart/PointsChart';

const Home = () => {

  return (
    <div style={{ marginTop: "30px" }}>
      <Typography variant="h4" align="left" gutterBottom>
        Dashboard
      </Typography>
      <WorkTimer />
      <Box sx={{ flexGrow: 1, paddingTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <WorkLifeBalance />
          </Grid>
          <Grid item xs={4}>
            <WorkLifeBalanceChart />
          </Grid>
          <Grid item xs={4}>
            <PointsChart />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
