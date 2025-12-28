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

{/* if you have something like /neet in the main Route you have to put /neet in the children as well  */}
          <Route path="/neet" element={<Layout></Layout>}>
{/* this will make consistency ki ha sirf /neet wale related routes hi u could access */}
            <Route path='/neet/home' element={<Home> </Home>}>
            </Route>

            <Route path='/neet/about me' element={<About></About>}></Route>

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
