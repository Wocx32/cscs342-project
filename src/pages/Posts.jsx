import Header from '../components/Header'
import PostsList from '../components/PostsList'
import Footer from '../components/Footer'

function Posts() {

  return (
    <>
      <Header />
      <main className='container content postpage'>
        <section className='hero'>
          <div>
            <h1>Posts</h1>
            <p>All of the posts</p>
          </div>
        </section>
        <section className='posts'>
          <div>
            {/* <h2>Posts</h2> */}
            <PostsList amount={100} />
          </div>
        </section>
      </main>
  
      <Footer />
    </>
  )
}

export default Posts
