import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Store from './components/Store';
import Container from '@mui/material/Container';

const AppRouter = () => {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </React.Fragment>
  );
};

export default AppRouter;
