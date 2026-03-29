import React from 'react' 
import { Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Gallery from './Pages/Gallery'
import Home from './Pages/Home'
import Joinus from './Pages/Joinus'
import Categories from './Pages/Categories'
import Profile from './components/Profile/Profile'
import AddBlog from './components/AddBlog/AddBlog'
import Blogs from './components/Blogs/Blogs'
import HCategory from './components/HeaderCategory/HCategory'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/joinus' element={<Joinus/>}/>
        <Route path= '/profile' element={<Profile/>}/>
        <Route path='/add' element={<AddBlog/>}/>
        <Route path='/blogs'element={<Blogs/>}/>
        <Route path="/category/:category" element={<HCategory />} />


      </Routes>    

    </>
  )
}

export default App
