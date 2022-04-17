import React from 'react'
import { ContainerProdutoCarrinho } from '../styles'


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