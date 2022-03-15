
export default function Post() {
    return (
        <>
            <div className="post">
                <DadosDoPost fotoDePerfil="./imgs/gatobranco.png" nomeDePerfil="cindy" fotoPostada="./imgs/gato-telefone 1.png" />
                <Comentarios quemComentou="cindy" oQueComentou="Quer saber como ganhar wiskas grátis? Arrasta pra cima bb" />
                <Comentarios quemComentou="yellow 2" oQueComentou="oi sumida" />
                <AddComentario />
            </div>
            <div className="post">
                <DadosDoPost fotoDePerfil="./imgs/persa.jpg" nomeDePerfil="zeus" fotoPostada="./imgs/gato-cinema.jpg" />
                <Comentarios quemComentou="zeus" oQueComentou="Cineminha com a gata" />
                <Comentarios quemComentou="cindy 2" oQueComentou="lindos" />
                <AddComentario />
            </div>
            <div className="post">
                <DadosDoPost fotoDePerfil="./imgs/nathanwpylestrangeplanet 1.png" nomeDePerfil="strange" fotoPostada="./imgs/gatostrange.jpg" />
                <Comentarios quemComentou="strange" oQueComentou="Domingão relaxado" />
                <AddComentario />
            </div>


        </>
    )
}

function DadosDoPost(props) {
    return (
        <>
            <div className="usuario">
                <img src={props.fotoDePerfil} alt="foto de perfil"></img>
                <p><strong>{props.nomeDePerfil}</strong></p>
                <div className="etc">
                    <img src="./imgs/ellipsis-horizontal 1.png" alt="tres pontos"></img>
                </div>
            </div>
            <div className="foto">
                <img src={props.fotoPostada} alt="foto postada"></img>
            </div>
            <div className="interacao">
                <div className="interacaoesquerda">
                    <ion-icon name="heart-outline"></ion-icon>
                    <img src="./imgs/compass-outline 1.png" alt="comentar foto"></img>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div className="intercaodireita">
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div className="curtidopor">
                <img src="./imgs/gato-rave.jpeg" alt="respondeAi"></img>
                <p>Curtido por <strong>yellow</strong> e <strong>outras 998 pessoas</strong></p>
            </div>
        </>
    )
}

function Comentarios(props) {
    return (
        <div className="comentariofoto">
            <div className="comentado">
                <p><strong>{props.quemComentou} </strong>{props.oQueComentou}</p>
            </div>
            <div className="curtircomentario">
                <ion-icon name="heart-outline"></ion-icon>
            </div>
        </div>
    )
}

function AddComentario() {
    return (
        <div className="addcomentario">
            <input type="text" placeholder="Adicionar comentário"></input>
            <button>Publicar</button>
        </div>
    )
}


