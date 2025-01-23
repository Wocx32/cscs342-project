import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'
import PostsList from '../components/PostsList'
import Footer from '../components/Footer'

function Author() {

    const [author, setAuthor] = useState({})
    let { authorId } = useParams()

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
            .then(response => response.json())
            .then(json => setAuthor(json))
            .catch(() => {})

    }, [])

    return (
        <>
            <Header />
            <main className='container content postpage'>
                <section className='hero'>
                    <div>
                        <h1>{author.username}</h1>
                        <a href="#">{author.email}</a>
                    </div>
                </section>
                <section>
                    <div className='posts'>
                        <h2>Post History</h2>
                        <PostsList userId={authorId} />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Author
