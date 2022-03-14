
import Post from "./Post"
import Stories from "./Stories"


export default function Feed() {
    return (
        <div className="feed">
            <div className="barrastories">
                <div className="retangulostories"></div>
                <Stories />
                <div className="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
            <Post />
        </div>
    )
}

