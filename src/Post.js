import React from "react";
export default function Post() {

    const cadaPost = [
        {
            fotoDePerfil: "./imgs/gatobranco.png",
            nomeDePerfil: "cindy",
            fotoPostada: "./imgs/gato-telefone 1.png",
            comentarios: [{
                quemComentou: "cindy",
                oQueComentou: "Quer saber como ganhar wiskas grátis? Arrasta pra cima bb"
            },
            {
                quemComentou: "yellow",
                oQueComentou: "oi sumida"
            }]
        },
        {
            fotoDePerfil: "./imgs/persa.jpg",
            nomeDePerfil: "zeus",
            fotoPostada: "./imgs/gato-cinema.jpg",
            comentarios: [{
                quemComentou: "zeus",
                oQueComentou: "Cineminha com a gata"
            },
            {
                quemComentou: "cindy",
                oQueComentou: "lindos"
            }]
        },
        {
            fotoDePerfil: "./imgs/nathanwpylestrangeplanet 1.png",
            nomeDePerfil: "strange",
            fotoPostada: "./imgs/gatostrange.jpg",
            comentarios: [{
                quemComentou: "strange",
                oQueComentou: "Domingão relaxado"
            }]
        }
    ];

    return (
        <>
            {cadaPost.map(post => {
                return (
                    <div className="post" key={post.fotoPostada}>
                        <DadosDoPost fotoDePerfil={post.fotoDePerfil} nomeDePerfil={post.nomeDePerfil} fotoPostada={post.fotoPostada} />
                        {post.comentarios.map(comentario =>
                            <Comentarios quemComentou={comentario.quemComentou} oQueComentou={comentario.oQueComentou} key={comentario.quemComentou} />
                        )}
                        <AddComentario />
                    </div>)
            })}
        </>
    )
}

function DadosDoPost(props) {

    const [like, setLike] = React.useState(<ion-icon name="heart-outline"></ion-icon>)

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
                <img src={props.fotoPostada} alt="foto postada"
                    onClick={() => setLike(<ion-icon name="heart" style={{ color: 'red' }}></ion-icon>)}>
                </img>
            </div>
            <div className="interacao">
                <div className="interacaoesquerda">
                    <span onClick={() => {
                        (like.props.name === "heart") ?
                            setLike(<ion-icon name="heart-outline"></ion-icon>)
                            : setLike(<ion-icon name="heart" style={{ color: 'red' }}></ion-icon>)
                    }}>
                        {like}</span>
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