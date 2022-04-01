import React from 'react'
import styled from 'styled-components'
import { ProdutoCarrinho } from './ProdutoCarrinho'

const ContainerPrincipalCarrinho = styled.div`
    display:flex;
    flex-direction: column;
    width: 20vw; 
    border: 1px solid black;
    height: 61vh;
    margin: 1rem;
    padding: 0.5rem;
    
`

export class Carrinho extends React.Component {
    
    valorTotalCarrinho = () => {
        let valorTotal = 0
        for (let produto of this.props.carrinho) {
            valorTotal += produto.valor * produto.quantidade
        }
        return valorTotal
    }
    
    render() {


        return (

            <ContainerPrincipalCarrinho>
                <h3>Carrinho:</h3>
                {this.props.carrinho.map((produto) => {
                    return <ProdutoCarrinho 
                    itemDoCarrinho={produto}
                    removeProdutoDoCarrinho={this.props.removeProdutoDoCarrinho}
                     />
                })}
                <p>Valor total:R${this.valorTotalCarrinho()},00</p>
            </ContainerPrincipalCarrinho>
        )
    }
}