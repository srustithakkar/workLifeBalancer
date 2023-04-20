import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import AppRouter from './AppRouter';
import { Link } from "react-router-dom"
import Points from './components/Points';
import { useSelector } from 'react-redux';

const Layout = () => {
  const points = useSelector((state) => state);
  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "#0f444c", color: "white", }} >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap sx={{ fontWeight: "bold", fontFamily: "Comic Sans MS" }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}> Life Balancer </Link>
          </Typography>
          <Link to="/store" style={{ textDecoration: "none", color: "white" }}>
            <Points points={points} />
          </Link>
        </Toolbar>
      </AppBar>
      <main >
        <Toolbar />
        <AppRouter />
      </main>
    </div>
  );
};

export default Layout