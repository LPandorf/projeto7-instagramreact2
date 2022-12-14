import React from 'react';
let numeroum = 101.523;
let numerodois = 99.158;
function Post(props) {
  console.log(props);
  const [numero, setNumero] = React.useState(props.pessoas)
  const [curtida, setCurtida] = React.useState(props.curtida);
  function postCurtido() {
    if (curtida === false) {
      setCurtida(!curtida);
      setNumero(numero + 0.001);
    } else {
      setCurtida(!curtida);
      setNumero(numero - 0.001);
    }
  }
  const [salvo, setSalvo] = React.useState(props.salvo);
  function postSalvo() {
    setSalvo(!salvo);
  }
  return (
    <div class="post" data-test="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagem} alt={props.imagem}/>
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        {curtida ? (
          <img src={props.imgpostada} alt={props.imgpostada} data-test="post-image"/>
        ) : (
          <img src={props.imgpostada} onClick={postCurtido} alt={props.imgpostada} data-test="post-image"/>
        )}        
      </div>

      <div class="fundo">

        <div class="acoes">
          <div>
            {curtida ? (
              <ion-icon name="heart" class="curtida" onClick={postCurtido} data-test="like-post"></ion-icon>
            ) : (
              <ion-icon name="heart-outline" onClick={postCurtido} data-test="like-post"></ion-icon>
            )}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            {salvo ? (
              <ion-icon name="bookmark" class="salvo" onClick={postSalvo} data-test="save-post"></ion-icon>
            ) : (
              <ion-icon name="bookmark-outline" class="salvo" onClick={postSalvo} data-test="save-post"></ion-icon>
            )}

          </div>
        </div>

        <div class="curtidas">
          <img src={props.imgcurtiu} alt={props.imgcurtiu}/>
          <div class="texto">
            Curtido por <strong>{props.curtidopor}</strong> e <strong data-test="likes-number">outras {numero} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
const posts = [
  { user: 'meowed', img: 'assets/img/meowed.svg', imgpost: 'assets/img/gato-telefone.svg', imgc: 'assets/img/respondeai.svg', curtp: 'respondeai', pes: numeroum, curtida: false, salvo: false },
  { user: 'barked', img: 'assets/img/barked.svg', imgpost: 'assets/img/dog.svg', imgc: 'assets/img/adorable_animals.svg', curtp: 'adorable_animals', pes: numerodois, curtida: false, salvo: false },
]
export default function Posts() {
  return (
    <div class="posts">
      {posts.map((post) => (
        <Post usuario={post.user} imagem={post.img} imgpostada={post.imgpost} imgcurtiu={post.imgc} curtidopor={post.curtp} pessoas={post.pes} curtida={post.curtida} salvo={post.salvo} />
      ))}
    </div>
  );
}