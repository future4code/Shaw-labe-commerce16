import React from 'react'
import { PostProduto } from './PostProduto'
import { ContainerPrincipalProdutos, DivSuperior, DivInferior  } from '../styles'

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