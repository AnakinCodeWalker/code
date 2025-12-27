import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Layout from "./components/Layout"
function App() {

  return (
    <>
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <Link to="/about me" style={{
          margin: 10
        }}>
          About me
        </Link>

        <Routes >

          <Route path="/" element={<Layout></Layout>}>

            <Route path='/home' element={<Home> </Home>}>
            </Route>

            <Route path='/about me' element={<About></About>}></Route>

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
