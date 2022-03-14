const postagens = [
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
    },
    {
        fotoDePerfil: "./imgs/logo-animalplanet.jpg",
        nomeDePerfil: "animalplanet",
        fotoPostada: "./imgs/video.mp4",
        comentarios: [{
            quemComentou: "animalplanet",
            oQueComentou: "O mundo animal tem uns bixo interessante"
        },
        {
            quemComentou: "strange",
            oQueComentou: "fazem parceria?"
        }]
    },
]

export default function Post() {
    return (
        postagens.map(post => {
            return (
                <div className="post">
                    <div className="usuario">
                        <img src={post.fotoDePerfil} alt="foto de perfil"></img>
                        <p><strong>{post.nomeDePerfil}</strong></p>
                        <div className="etc">
                            <img src="./imgs/ellipsis-horizontal 1.png" alt="tres pontos"></img>
                        </div>
                    </div>
                    <div className="foto">
                        <img src={post.fotoPostada} alt="foto postada"></img>
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

                    {post.comentarios.map(comentario => {
                        return (
                            <div className="comentariofoto">
                                <div className="comentado">
                                    <p><strong>{comentario.quemComentou} </strong>{comentario.oQueComentou}</p>
                                </div>
                                <div className="curtircomentario">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </div>
                            </div>
                        )
                    })
                    }
                    <div className="addcomentario">
                        <input type="text" placeholder="Adicionar comentário"></input>
                        <button>Publicar</button>
                    </div>
                </div>
            )
        })

    )
}


