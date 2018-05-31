import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

const Header = () => (
  <AppBar position="static" color="default" >
    <Toolbar>
      {
        // if not home path show back icon
        window.location.pathname !== '/' ?
          <IconButton component={Link} to="/"> <ArrowBack /> </IconButton>
          : ''
      }
      <Typography variant="title" color="inherit">
        Users Datatable
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;