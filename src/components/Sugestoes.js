import React from "react";

function Sugestao(props){
    console.log(props);
    //mini bonus <3 -> mudar de seguir para seguindo
    const [follow, setFollow] = React.useState('Seguir');
    return (
        <div class="sugestao">
            <div class="usuario">
              <img src={props.imagem} alt={props.imagem} />
              <div class="texto">
                <div class="nome">{props.nome}</div>
                <div class="razao">{props.razao}</div>
              </div>
            </div>
            <div class="seguir" onClick={()=> setFollow('Seguindo') } >{follow}</div>
        </div>
    );
}
//easter egg https://www.youtube.com/watch?v=k3zimSRKqNw
const sugestoes=[
    {nome:'bad.vibes.memes', imagem:'assets/img/bad.vibes.memes.svg', razao:'Segue você'},
    {nome:'chibirdart', imagem:'assets/img/chibirdart.svg', razao:'Segue você'},
    {nome:'razoesparaacreditar', imagem:'assets/img/razoesparaacreditar.svg', razao:'Novo no Instagram'},
    {nome:'adorable_animals', imagem:'assets/img/adorable_animals.svg', razao:'Segue você'},
    {nome:'smallcutecats', imagem:'assets/img/smallcutecats.svg', razao:'Segue você'}

]

export default function Sugestoes(){
	return (
	     <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestoes.map((sugestao) =>(
                    <Sugestao nome={sugestao.nome} imagem={sugestao.imagem} razao={sugestao.razao} />
                ))}
            </div>
	);
}
