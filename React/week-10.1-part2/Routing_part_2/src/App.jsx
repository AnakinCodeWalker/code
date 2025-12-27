import {BrowserRouter, Routes , Route, Link} from "react-router-dom" 
import './App.css'
import Home from "./components/Home"
function App() {

  return (
  <>
  <BrowserRouter>
<Link to="/home">Home</Link>

  <Routes >

<Route  path='/home'  element={<Home> </Home>}>

</Route>

  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
