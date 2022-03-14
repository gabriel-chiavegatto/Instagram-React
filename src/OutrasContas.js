
export default function OutrasContas() {
    return (
        <div>
            <CadaSugetão foto="./imgs/gatoflocky-1.jpeg" user="baby.flocky" status="Novo no Instagram" />
            <CadaSugetão foto="./imgs/smallcutecats 1.png" user="simba_cat" status="Segue você" />
            <CadaSugetão foto="./imgs/chibirdart 1.png" user="naosougato" status="Segue você" />
            <CadaSugetão foto="./imgs/budah.jpeg" user="budah_miau" status="Novo no Instagram" />
            <CadaSugetão foto="./imgs/pedigree-logo-1.png" user="pedrigree" status="Segue você" />
        </div>
    )
}
function CadaSugetão(props) {
    return (
        <div className="outrascontas">
            <div className="fotosugestao">
                <img src={props.foto} alt="foto-dos-desconhecidos"></img>
            </div>
            <div className="nomesugestao">
                <p className="user">{props.user}</p>
                <p className="comentario">{props.status}</p>
            </div>
            <div className="seguirsugestao">
                <p><strong>Seguir</strong></p>
            </div>
        </div>
    )
}