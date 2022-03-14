export default function Topo() {
    return (
        <header className="topo">
            <div className="conteudotopo">
                <div className="logosdesktop">
                    <div className="logoimg">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                    <div className="retangulo"></div>
                    <div className="logoescrita">
                        <img src="./imgs/logo 1.png" alt="logo escrita"></img>
                    </div>
                </div>
                <div className="logoimgmobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>
                <div className="logoescritamobile">
                    <img src="./imgs/logo 1.png" alt="logo escrita"></img>
                </div>
                <div className="pesquisar">
                    <p>Pesquisar</p>
                </div>
                <div className="opçoes">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <img src="./imgs/compass-outline 1.png" alt="explorar"></img>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
                <div className="direct">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </header>
    )
}