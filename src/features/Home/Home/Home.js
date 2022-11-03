import { Grid } from '@material-ui/core';
import { Pagination } from '@mui/material';
import React, { useState, useEffect } from 'react'
import CardProduto from './../../../componentes/card/CardProduto';
import './Home.css';

const Home = (props) => {

    const [page, setPage] = useState(1)
    const [numberPage, setNumberPage] = useState(10)

    const handlePage = (event, value) => {
        setPage(value)
    }

    useEffect(() => {
        props.exibeConteudoLateral(false);
    }, [])

    return (
        <>
            <Grid container xs={12} style={{ height: '100%' }}>
                <Grid>
                    <CardProduto numberPage={page} />
                </Grid>
            </Grid>
            <Grid container item xs={12} justifyContent='center'>
                <Pagination
                    color="primary"
                    count={numberPage}
                    className='marginItems'
                    onChange={handlePage} />
            </Grid>
        </>
    );
};

export default Home
