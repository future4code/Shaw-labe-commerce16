import React from "react";
import { DivProduto } from '../styles'

export class PostProduto extends React.Component {
    render() {
        return (

            <DivProduto>
                <img src={this.props.produtoIndividual.photo} />
                <div>
                    <p>{this.props.produtoIndividual.nome}</p>
                    <p>R${this.props.produtoIndividual.valor},00</p>
                    <button onClick={() => this.props.adicionaProdutoNoCarrinho(this.props.produtoIndividual.id)}>Adicionar ao carrinho</button>
                </div>
            </DivProduto>
        )
    }
}

