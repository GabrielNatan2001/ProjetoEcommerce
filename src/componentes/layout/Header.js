import React, { useEffect } from 'react'
import './Header.css';
import { Badge, Grid } from '@material-ui/core';
import Login from './../Login/Login';
import { Autocomplete, TextField } from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import Logo from '../../../src/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {

    const listaPesquisa = ['teste', 'pesquisa', 'produto']

    return (
        <Grid item container xs={12} className="headerContainer" alignContent='center' alignItems="center">
            <Grid container item xs={12} sm={12} md={3} justifyContent='center'>
                <img src={Logo} width="90px" height="90px" />
            </Grid>
            <Grid container item xs={12} sm={12} md={4} justifyContent='center'>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={listaPesquisa}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} label="Pesquisa" />}
                />
            </Grid>
            <Grid container item xs={12} sm={12} md={2} justifyContent="flex-end">
                <Grid item sm={3}>
                    <Link to="/Home" className='removeLink'>
                    <HomeIcon />
                    </Link>
                </Grid>
                <Grid item sm={3}>
                    <Badge color="secondary" badgeContent={10}>
                        <NotificationsIcon />
                    </Badge>
                </Grid>
                <Grid item sm={3}>
                    <Badge color="secondary" badgeContent={3}>
                        <ShoppingCartIcon />
                    </Badge>
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={3} justifyContent='flex-end'>
                <Login />
            </Grid>
        </Grid>
    );
}

export default Header;
