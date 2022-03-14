
const dadosStories = [
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
]

export default function Stories() {
    return (
        dadosStories.map(storie => {
            return (
                <div className="back-ground-stories">
                    <img src="./imgs/stories_background 1.png" alt="back-ground-storie"></img>
                    <p>{storie.nome}</p>
                    <div className="stories-foto">
                        <img src={storie.foto} alt="storiesfoto"></img>
                    </div>
                </div>
            )
        })
    )
}