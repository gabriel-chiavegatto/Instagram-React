
import OutrasContas from "./OutrasContas"

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="perfil">
                <img src="./imgs/gato-executivo.jpeg" alt="gatoperfil"></img>
                <div className="nomeperfil">
                    <p><strong>chico.dev</strong></p>
                    <p><small>Chico</small></p>
                </div>
            </div>
            <div className="sugestoes">
                <p className="paravoce">Sugestões para você</p>
                <p className="vertudo"><strong>Ver tudo</strong></p>
            </div>
            <OutrasContas />
            <div className="sobre">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma</p>
            </div>
            <div className="span">
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    )
}