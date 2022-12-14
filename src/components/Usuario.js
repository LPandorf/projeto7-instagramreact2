import React from 'react';
function Perfil(props){
    console.log(props);
    const [nome, setNome] = React.useState(props.nome);
    function mudarNome(){
        const novoNome=prompt("Digite seu novo nome:");
        if(novoNome!==''){
            setNome(novoNome);  
        }  
    }
    const [foto, setFoto] = React.useState(props.foto);
    function mudarFoto(){
        const novaFoto=prompt("Coloque o link da sua nova foto de perfil:");
        if(novaFoto!==''){
            setFoto(novaFoto); 
        }
    }    
    return (
        <div class="ladinho">
            <img src={foto} onClick={mudarFoto} alt={foto} data-test="profile-image"/>
            <div class="texto">
                <strong>{props.user}</strong>
                <span data-test="name">
                    {nome}
                    <ion-icon name="pencil" onClick={mudarNome} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    );
}
const perfil =[
    {user:'catanacomics', nome:'Catana', foto:'assets/img/catanacomics.svg'}
]
export default function Usuario(){
    return (
        <div class="usuario" data-test="user">
            {perfil.map((profile) =>(
                <Perfil user={profile.user} nome={profile.nome} foto={profile.foto} />
            ))}
        </div>
    );
}