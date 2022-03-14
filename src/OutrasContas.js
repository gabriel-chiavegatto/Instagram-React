const sugestoes = [
    {
        foto: "./imgs/gatoflocky-1.jpeg",
        user: "baby.flocky",
        status: "Novo no Instagram"
    },
    {
        foto: "./imgs/smallcutecats 1.png",
        user: "simba_cat",
        status: "Segue você"
    },
    {
        foto: "./imgs/chibirdart 1.png",
        user: "naosougato",
        status: "Segue você"
    },
    {
        foto: "./imgs/budah.jpeg",
        user: "budah_miau",
        status: "Novo no Instagram"
    },
    {
        foto: "./imgs/pedigree-logo-1.png",
        user: "pedrigree",
        status: "Segue você"
    }
]

export default function OutrasContas() {
    return (
        sugestoes.map(sugestao => {
            return (
                <div className="outrascontas">
                    <div className="fotosugestao">
                        <img src={sugestao.foto} alt="foto-dos-desconhecidos"></img>
                    </div>
                    <div className="nomesugestao">
                        <p className="user">{sugestao.user}</p>
                        <p className="comentario">{sugestao.status}</p>
                    </div>
                    <div className="seguirsugestao">
                        <p><strong>Seguir</strong></p>
                    </div>
                </div>
            )
        }
        )

    )
}