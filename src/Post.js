
export default function Post() {
    return (
        <div className="post">
            <div className="usuario">
                <img src="./imgs/gatobranco.png" alt="foto de perfil"></img>
                <p><strong>cindy</strong></p>
                <div className="etc">
                    <img src="./imgs/ellipsis-horizontal 1.png" alt="tres pontos"></img>
                </div>
            </div>
            <div className="foto">
                <img src="./imgs/gato-telefone 1.png" alt="gato"></img>
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

            <div className="comentariofoto">
                <div className="comentado">
                    <p><strong>cindy </strong>Quer saber como ganhar wiskas grátis? Arrasta pra cima bb</p>
                </div>
                <div className="curtircomentario">
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
            </div>
            <div className="comentariofoto">
                <div className="comentado">
                    <p><strong>yellow </strong>oi sumida</p>
                </div>
                <div className="curtircomentario">
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
            </div>
            <div className="addcomentario">
                <input type="text" placeholder="Adicionar comentário"></input>
                <button>Publicar</button>
            </div>
        </div>
    )
}


