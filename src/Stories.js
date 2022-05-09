
export default function Stories() {
    const stories = [
        {
            foto: "./imgs/logo-animalplanet.jpg",
            nome: "animalplanet"
        },
        {
            foto: "./imgs/nathanwpylestrangeplanet 1.png",
            nome: "strange"
        },
        {
            foto: "./imgs/gatobranco.png",
            nome: "cindy"
        },
        {
            foto: "./imgs/logo-wiskas.jpg",
            nome: "wiskas"
        },
        {
            foto: "./imgs/gato-rave.jpeg",
            nome: "yellow"
        },
        {
            foto: "./imgs/catnip.jpg",
            nome: "catnip"
        },
        {
            foto: "./imgs/persa.jpg",
            nome: "zeus"
        },
        {
            foto: "./imgs/gatotiger.jpg",
            nome: "tiger"
        }
    ];

    return (
        <div className="barrastories">
            <div className="retangulostories"></div>
            {stories.map( story => <CadaStorie foto={story.foto} nome={story.nome} key={story.foto}/>)}
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