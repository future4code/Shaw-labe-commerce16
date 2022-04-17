import React from 'react'
import { ContainerPrincipalFiltro } from './styles'

export function Filtro(props) {

    return (
        <ContainerPrincipalFiltro>
            <h3>Filtros</h3>

            <label>Valor mínimo:</label>
            <input
                type={"number"}
                value={props.filtroMin}
                onChange={props.novoFiltroMin}
            />

            <label>Valor máximo:</label>
            <input
                type={"number"}
                value={props.filtroMax}
                onChange={props.novoFiltroMax}
            />

            <label>Busca por nome:</label>
            <input
                value={props.filtroNome}
                onChange={props.novoFiltroNome}
            />

        </ContainerPrincipalFiltro>
    )

}