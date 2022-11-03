import { FormControl, FormGroup, FormLabel, Grid } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import React, {useEffect, useReducer} from 'react'
import './FiltroProduto.css'

function reducer(state, action) {
    switch (action.type) {
        case 'update':
            return { ...state, ...action.data }
        case 'clear':
            return initialState
        default:
            return state
    }
}

const initialState={
    filtroValue: []
}

const FiltrosProduto = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const {filtroValue} = state

    const filtrosTipo = [
        { Id: 1, Description: 'Tipo1' },
        { Id: 2, Description: 'Tipo2' },
        { Id: 3, Description: 'Tipo3' },
        { Id: 4, Description: 'Tipo4' },
        { Id: 5, Description: 'Tipo5' },

    ]
    const filtrosValor = [
        { Id: 6, Description: 'Valor' },
        { Id: 7, Description: 'Valor' },
        { Id: 8, Description: 'Valor' },
    ]
    const filtrosMarca = [
        { Id: 10, Description: 'Marca1' },
        { Id: 11, Description: 'Marca2' },
        { Id: 12, Description: 'Marca3' },
        { Id: 13, Description: 'Marca4' },
    ]

    const handleChange = (valor) => {
        
    console.log(initialState)
        const indexItem = filtroValue.indexOf(valor)
        let listaItem = [...filtroValue]
        if(indexItem === -1){
            listaItem.push(valor)
        }else{
            listaItem.splice(indexItem, 1)
        }
        console.log(listaItem)
        dispatch({
            type: 'update',
            data: {filtroValue: listaItem}
        })
    }

    return (
        <Grid className='centralizaListas'>
            <FormLabel component="legend">Tipos</FormLabel>
            {filtrosTipo.map((item) => {
                return (
                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" >
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={filtroValue.indexOf(item.Id) !== -1} onChange={() =>handleChange(item.Id)} name={`check-box-tipo${item.Id}`} />
                                }
                                label={item.Description}
                            />
                        </FormGroup>
                    </FormControl>
                );
            })}

            <FormLabel component="legend">Marca</FormLabel>
            {filtrosMarca.map((item) => {
                return (
                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={filtroValue.indexOf(item.Id) !== -1} onChange={() =>handleChange(item.Id)} name={`check-box-tipo${item.Id}`} />
                                }
                                label={item.Description}
                            />
                        </FormGroup>
                    </FormControl>
                );
            })}

            <FormLabel component="legend">Valor</FormLabel>
            {filtrosValor.map((item) => {
                return (
                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={filtroValue.indexOf(item.Id) !== -1} onChange={() =>handleChange(item.Id)} name={`check-box-tipo${item.Id}`} />
                                }
                                label={item.Description}
                            />
                        </FormGroup>
                    </FormControl>
                );
            })}
        </Grid>
    )
}

export default FiltrosProduto