import Header from '../components/Header'
import PostsList from '../components/PostsList'
import Footer from '../components/Footer'

function Home() {

  return (
    <>
      <Header />
      <main className='container content'>
        <section className='hero'>
          <div>
            <h1>Generic Blog Site</h1>
            <p>Write and get no money in return</p>
          </div>
        </section>
        <section className='posts'>
          <div>
            <h2>Latest Posts</h2>
            <PostsList amount={4} />
          </div>
        </section>
        {/* <section className='authors'>
          <div>
            <h2>Our Authors</h2>
            <Authors />
          </div>
        </section> */}
      </main>
  
      <Footer />
    </>
  )
}

export default Home
