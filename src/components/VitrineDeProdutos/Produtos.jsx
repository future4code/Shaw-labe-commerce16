import React from 'react'
import styled from 'styled-components'
import { PostProduto } from './PostProduto'


const ContainerPrincipalProdutos = styled.div`
display: flex;
flex-direction: column;
max-height: 100vh;
width:70vw;
padding: 0 1rem;
`
const DivSuperior = styled.div`
display:flex;
max-width: 100%;
justify-content: space-between;
text-align: center;
align-items: center;
max-height: 10vh;
padding: 0.5rem; 

select {
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
    div{
        display:flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        padding:0.5rem;

        p {
            margin-right: 0.5rem;
        }
        }
`

const DivInferior = styled.div`
    display: grid;
    max-height: 90vh;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: 8px 8px;
    text-align: center;

    img { 
        width: 100%;
        height: 200px;  
        border-radius: 20px;
        }
    `

export class Produtos extends React.Component {

    state = {
        sorting: "crescente"
    }

    atualizaSorting = (event) => {
        this.setState({
            sorting: event.target.value
        })
    }

    pegaProdutosOrdenados = () => {
        return this.props.produtos
            .filter(produto => {
                return produto.nome.toLowerCase().includes(this.props.filtroNome.toLowerCase())
            })
            .filter((produto) => {
                return this.props.filtroMin === "" || produto.valor >= this.props.filtroMin
            })
            .filter((produto) => {
                return this.props.filtroMax === "" || produto.valor <= this.props.filtroMax
            })
            .sort((a, b) => this.state.sorting === 'crescente' ? a.valor - b.valor : b.valor - a.valor)
    }

    render() {
        const produtosOrdenados = this.pegaProdutosOrdenados()
        return (
            <ContainerPrincipalProdutos>
                <DivSuperior>
                    <p>Quantidade de produtos: {produtosOrdenados.length}</p>
                    <label>
                        <p>Ordenação:</p>
                        <select
                            onChange={this.atualizaSorting}
                            value={this.state.sorting}
                        >
                            <option value={'crescente'}>Crescente</option>
                            <option value={'decrescente'}>Decrescente</option>
                        </select>
                    </label>
                </DivSuperior>
                <DivInferior>
                    {produtosOrdenados.map((produto) => {
                        return (
                            <PostProduto
                                produtoIndividual={produto}
                                adicionaProdutoNoCarrinho={this.props.adicionaProdutoNoCarrinho}
                            />
                        )
                    })}
                </DivInferior>
            </ContainerPrincipalProdutos>
        )
    }
}