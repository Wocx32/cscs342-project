import { Link } from "react-router"

export default function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><a href="/"><h3>🅱️log</h3></a></li>
                    </ul>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}