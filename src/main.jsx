import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.scss'
import Home from './pages/Home.jsx'
import Posts from './pages/Posts.jsx'
import Post from './pages/Post.jsx'
import Author from './pages/Author.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/posts/:postId' element={<Post />} />
      <Route path='/user/:authorId' element={<Author />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>
)
