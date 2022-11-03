import PropTypes from 'prop-types'
import React, { useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './../features/Home/Home/Home';
import ProductDetails from '../features/Home/ProductDetails/ProductDetails';

const RoutesWeb = () => {

    const [exibeConteudo, setExibeConteudo] = useState(false)

    const handleConteudo = value =>{
        setExibeConteudo(value)
    }

    return(
    <>
        <BrowserRouter>
            <Layout removeConteudoLaterias={exibeConteudo? true: false}>
                <Routes>
                    <Route exact path="/Home" element={<Home exibeConteudoLateral={(e) => handleConteudo(e)}/>} />
                    <Route exact path="/Product/:id" element={<ProductDetails exibeConteudoLateral={(e) => handleConteudo(e)}/>} />
                </Routes>
            </Layout>

        </BrowserRouter>
    </>
    );
};

export default RoutesWeb;
