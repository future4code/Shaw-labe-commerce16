import React from 'react';
import { Produtos } from './components/VitrineDeProdutos/Produtos';
import { Filtro } from './components/Filtro';
import { Carrinho } from './components/Carrinho/Carrinho';
import { ContainerPrincipal, ContainerFlexGrande } from './components/styles'

const produtos = [
  {
    id: 1,
    nome: 'Viagem a lua',
    valor: 158000,
    photo: "https://aluatristonha.files.wordpress.com/2012/04/space-chimp-ham-monkey-astronaut-grawitz-tumor.jpg",
  },
  {
    id: 2,
    nome: 'Jantar romântico no espaço',
    valor: 980,
    photo: "https://conteudo.imguol.com.br/c/bol/fotos/c8/2016/06/15/1-o-unico-animal-alem-do-ser-humano-que-faz-sexo-por-diversao-ou-interesse-e-o-macaco-bonobo-pan-paniscus-os-bonobos-usam-o-sexo-como-forma-de-conseguir-melhorar-sua-posicao-social-e-para-reduzir-1466033200281_956x500.jpg",
  },
  {
    id: 3,
    nome: 'Alianças de meteorito',
    valor: 1860,
    photo: "https://www.prontmol.com.br/ad/upload/imagens/produtos/pa-052.jpg",
  },
  {
    id: 4,
    nome: 'Camiseta Vaza',
    valor: 125,
    photo: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/308/484/products/19-camisa-vaza-i-need-space1-17ecaccf68d80ac60216295608910386-640-0.png",
  },
  {
    id: 5,
    nome: 'Chaveiro nasa',
    valor: 25,
    photo: "https://brastour.pt/1-52763/image_pic-Moda-rob%C3%B4-astronauta-astronauta-chaveiro-de-acr%C3%ADlico.jpg",
  },
  {
    id: 6,
    nome: 'Drone foguete',
    valor: 2580,
    photo: "https://superlegalbrinquedos.vteximg.com.br/arquivos/ids/173170-800-800/8014-0_Aviao_de_Brinquedo_com_Friccao_Vroom_N_Zoom_Jett_Super_Wings_Fun_1.jpg?v=637152061587370000",
  },
]
class App extends React.Component {

  state = {
    carrinho: [],
    filtroMin: "",
    filtroMax: "",
    filtroNome: "",
  }

  novoFiltroNome = (event) => {
    this.setState({
      filtroNome: event.target.value
    })
  }
  novoFiltroMin = (event) => {
    this.setState({
      filtroMin: event.target.value
    })
  }
  novoFiltroMax = (event) => {
    this.setState({
      filtroMax: event.target.value
    })
  }

  adicionaProdutoNoCarrinho = (IdProduto) => {
    const produtoNoCarrinho = this.state.carrinho.find(produto => IdProduto === produto.id)
    if (produtoNoCarrinho) {
      const novoProdutoNoCarrinho = this.state.carrinho.map(produto => {
        if (IdProduto === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }
        return produto
      })
      this.setState({ carrinho: novoProdutoNoCarrinho })
    } else {
      const produtoNovo = produtos.find(produto => IdProduto === produto.id)
      const novoProdutoNoCarrinho = [...this.state.carrinho, { ...produtoNovo, quantidade: 1 }]

      this.setState({ carrinho: novoProdutoNoCarrinho })
    }
  }

  removeProdutoDoCarrinho = (IdProduto) => {
    const novoProdutoNoCarrinho = this.state.carrinho.map((produto) => {
      if (produto.id === IdProduto) {
        return {
          ...produto,
          quantidade: produto.quantidade - 1
        }
      }
      return produto
    }).filter((produto) => {
      return produto.quantidade > 0
    })
    this.setState({ carrinho: novoProdutoNoCarrinho })
  }

  render() {

    return (

      <ContainerPrincipal>
        <ContainerFlexGrande>
          <Filtro
            filtroMin={this.state.filtroMin}
            novoFiltroMin={this.novoFiltroMin}
            filtroMax={this.state.filtroMax}
            novoFiltroMax={this.novoFiltroMax}
            filtroNome={this.state.filtroNome}
            novoFiltroNome={this.novoFiltroNome}
          />

          <Produtos
            produtos={produtos}
            filtroMin={this.state.filtroMin}
            filtroMax={this.state.filtroMax}
            filtroNome={this.state.filtroNome}
            adicionaProdutoNoCarrinho={this.adicionaProdutoNoCarrinho}
          />

          <Carrinho
            carrinho={this.state.carrinho}
            removeProdutoDoCarrinho={this.removeProdutoDoCarrinho}
          />
        </ContainerFlexGrande>
      </ContainerPrincipal>

    );
  }
}

export default App;
