
export default function Stories() {
    return (
        <div className="barrastories">
            <div className="retangulostories"></div>
            <CadaStorie foto="./imgs/logo-animalplanet.jpg" nome="animalplanet" />
            <CadaStorie foto="./imgs/nathanwpylestrangeplanet 1.png" nome="strange" />
            <CadaStorie foto="./imgs/gatobranco.png" nome="cindy" />
            <CadaStorie foto="./imgs/logo-wiskas.jpg" nome="wiskas" />
            <CadaStorie foto="./imgs/gato-rave.jpeg" nome="yellow" />
            <CadaStorie foto="./imgs/catnip.jpg" nome="catnip" />
            <CadaStorie foto="./imgs/persa.jpg" nome="zeus" />
            <CadaStorie foto="./imgs/gatotiger.jpg" nome="tiger" />
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}
function CadaStorie(props) {
    return (
        <div className="back-ground-stories">
            <img src="./imgs/stories_background 1.png" alt="back-ground-storie"></img>
            <p>{props.nome}</p>
            <div className="stories-foto">
                <img src={props.foto} alt="storiesfoto"></img>
            </div>
        </div>
    )
}