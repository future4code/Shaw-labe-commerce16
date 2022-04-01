import React from 'react'
import styled from 'styled-components'

const ContainerProdutoCarrinho = styled.div`
    display:flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    margin-bottom: -1rem;

    button {
    width: 30%;
    border: none;
    background-color: #d3d3d32f;
    border-radius: 15rem;
    padding: 0.1rem;
    font-weight: 600;
    opacity: 0.7;
    text-align: center;
    &:hover {
        opacity: 1; 
        background-color: darkgrey; 
        color: white;
        }
    }
`

export class ProdutoCarrinho extends React.Component {
    render() {
        return (
            <ContainerProdutoCarrinho>
                <>
                    <p>{this.props.itemDoCarrinho.quantidade}x</p>
                    <p>{this.props.itemDoCarrinho.nome}</p>
                    <button onClick={() => this.props.removeProdutoDoCarrinho(this.props.itemDoCarrinho.id)}>Remover</button>
                </>
            </ContainerProdutoCarrinho>
        )
    }
}