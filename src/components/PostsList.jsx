import { useState, useEffect } from "react"
import { Link } from "react-router"
import postImg from "../assets/post_placeholder.png"

export default function PostsList({ amount = 20, userId = null }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        if (userId) {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(response => response.json())
                .then(json => setPosts(json))
                .catch(() => {})
        } else {

            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(json => setPosts(json))
                .catch(() => {})
        }
    }, [])


    if (posts.length !== 0) {

        return (
            <div className="post-grid">
                {posts.slice(0, amount).map((post) => (
                    <Link to={`/posts/${post.id}`} key={post.id} className="secondary">
                        <article className="post-item">
                            <header>
                                <img src={postImg} alt="post image" />
                            </header>
                            {post.title}
                        </article>
                    </Link>
                ))}
            </div>
        )
    }

    return (
        <div>
            No posts...
        </div>
    )
}