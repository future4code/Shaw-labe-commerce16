import React from 'react'
import { ProdutoCarrinho } from './ProdutoCarrinho'
import { ContainerPrincipalCarrinho } from '../styles'



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