import styled from 'styled-components'
import background from '../bckg.svg'


export const ContainerPrincipalCarrinho = styled.div`
    display:flex;
    flex-direction: column;
    width: 20vw; 
    border: 2px solid black;
    border-radius: 20px;
    box-shadow: 0 0 5px 0;
    margin: 1rem;
    padding: 0.5rem;

    @media (max-width: 500px) {
        width: 50vw;
    }

    p {
        @media (max-width: 1000px) {
        word-wrap:break-word;
    }
    }
    
`

export const ContainerProdutoCarrinho = styled.div`
    display:flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    margin-bottom: -1rem;

    @media (max-width: 1000px) {
        flex-direction: column;
    }

    p {
        @media (max-width: 1000px) {
        word-wrap:break-word;
    }
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

export const DivProduto = styled.div`
    display: flex;
    flex-direction: column; 
    border-radius: 20px;

    div {
        padding-bottom: 0.5rem;
        line-height: 1.5px
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

export const ContainerPrincipalProdutos = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width:70vw;
padding: 0 0.5rem;
margin-bottom: 0.5rem;
`

export const DivSuperior = styled.div`
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

export const DivInferior = styled.div`
display: grid;
max-height: 100%;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: auto;
grid-gap: 8px 8px;
text-align: center;

@media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
}

img { 
    width: 100%;
    height: 150px;  
    border-radius: 20px;
    border: 1px solid black;
    box-shadow: 0 0 5px 0;
    }
`

export const ContainerPrincipalFiltro = styled.div`
display:flex;
justify-content: flex-start;
flex-direction: column;
width: 20vw; 
border: 2px solid black;
border-radius: 20px;
box-shadow: 0 0 5px 0;
margin: 1rem;
padding: 0.5rem;

@media (max-width: 500px) {
    width: 50vw;
}

input {
    margin-bottom: 0.5rem;
    width: 50%; 

    @media (max-width: 900px) {
    width: 90%;
}
}
`

export const ContainerPrincipal = styled.div`
display: flex;
flex-direction: column;
margin: 0; 
padding: 0;
box-sizing:border-box;
max-width: 100vw;
background-image:url(${background});
background-size:cover;
`
export const ContainerFlexGrande = styled.div`
display: flex;
min-height:100vh;

@media (max-width: 500px) {
        flex-direction: column;
        margin: 0 auto;
        text-align: center;
        align-items: center; 
        justify-content: center;
    }
`
