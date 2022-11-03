import React, { useEffect } from 'react'
import Header from './Header';
import { Grid } from '@material-ui/core';
import './Layout.css';
import FiltrosProduto from './../filtro/FiltrosProduto';

const Layout = React.forwardRef((props, ref) => {

    return (
        <div className='bodyLayout'>
            <Grid container item>
                <Header />
            </Grid>
            <Grid container className='marginHeader'>
                <Grid container 
                item 
                direction='column' 
                xs={1} 
                sm={2} 
                alignItems='center' 
                style={{marginTop: '3em'}}>
                    {props.removeConteudoLaterias ? null:
                        <FiltrosProduto/>
                    }
                </Grid>
                <Grid container item direction='row' xs={10} sm={9}>
                    {props.children}
                </Grid>
                <Grid container item direction='column' xs={1} sm={1}>

                </Grid>
            </Grid>
        </div>
    );
});

export default Layout;
