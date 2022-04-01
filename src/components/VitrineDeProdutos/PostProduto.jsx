import React from "react";
import styled from 'styled-components'


const DivProduto = styled.div`
    display: flex;
    flex-direction: column; 
    border: 1px solid black;
    border-radius: 20px;

    div {
        padding-bottom: 0.5rem;
    }

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

