import React, { useState, useEffect } from 'react'
import { Avatar, Grid } from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {

    const [verificaLogado, setVerifcarLogado] = useState(false)
    const dadosUsuario = { id: 11, name: 'GabrielNatan', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBtC4-m8DnE4ZJkd-xdMZsJ3RMxv1RHLUXg&usqp=CAU' }
    useEffect(() => {
        //const token = sessionStorage.getItem("token")
        const token = true
        setVerifcarLogado(token ? true : false)
        setUsuario(dadosUsuario)

    }, [])

    const [usuario, setUsuario] = useState({})

    const handleLogin = () =>{
            setVerifcarLogado(!verificaLogado)
    }


    return (
        <>
            <Grid container xs={8} md={10} alignItems="center">
                {verificaLogado ? (
                    <>
                        <Grid item xs={2}>
                            <Avatar 
                            src={usuario.imagem}/>
                        </Grid>
                        <Grid item xs={9} className='dadosUsuario'>
                            <Grid item xs={12}>
                                <b>{usuario.name}</b>
                            </Grid>
                            <Grid item xs={12}>
                                <p style={{fontSize: '15px'}}>Conta</p>
                            </Grid>
                            <Grid item xs={12}>
                                <b style={{fontSize: '15px'}} onClick={handleLogin}>Sair</b>
                            </Grid>
                        </Grid>
                    </>
                ) :
                    (
                        <>
                            <Grid item xs={2}>
                                <Avatar />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid item xs={12}>
                                    {/*Faça seu <Link to='/Login' className='removeLink'><b>Login</b></Link>*/}
                                    Faça seu <b onClick={handleLogin}>Login</b>
                                </Grid>
                                <Grid item xs={12}>
                                    ou <Link to='/Cadastro' className='removeLink'><b>Cadastre-se</b></Link>
                                </Grid>
                            </Grid>
                        </>
                    )}

            </Grid >
        </>
    )
}

export default Login;