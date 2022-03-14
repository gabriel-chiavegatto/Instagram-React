
import Post from "./Post"
import Stories from "./Stories"


export default function Feed() {
    return (
        <div className="feed">
            <Stories />
            <Post />
        </div>
    )
}

