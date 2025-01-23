export default function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><a href="/"><h3>🅱️log</h3></a></li>
                    </ul>
                    <ul>
                        <li><a href={`${import.meta.env.BASE_URL}`}>Home</a></li>
                        <li><a href={`${import.meta.env.BASE_URL}posts`}>Posts</a></li>
                        <li><a href={`${import.meta.env.BASE_URL}contact`}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}