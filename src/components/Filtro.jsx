import React from 'react'
import styled from 'styled-components'

const ContainerPrincipalFiltro = styled.div`
    display:flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 20vw; 
    border: 1px solid black;
    height: 61vh;
    margin: 1rem;
    padding: 0.5rem;
    
    input {
        margin-bottom: 0.5rem;
        width: 169px
    }
`

export function Filtro(props) {

    return (
        <ContainerPrincipalFiltro>
            <h3>Filtros</h3>

            <label>Valor mínimo:</label>
            <input 
            type={"number"}
            value = {props.filtroMin}
            onChange = {props.novoFiltroMin}
            />

            <label>Valor máximo:</label>
            <input 
            type={"number"}
            value = {props.filtroMax}
            onChange = {props.novoFiltroMax}
            />

            <label>Busca por nome:</label>
            <input
            value = {props.filtroNome}
            onChange = {props.novoFiltroNome}
            />
            
        </ContainerPrincipalFiltro>
    )

}