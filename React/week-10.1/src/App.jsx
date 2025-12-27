/*
 BrowserRouter provides routing context, Routes handles route matching, and Route defines which component should render for a specific path.

 Context → Matching → Rendering
 BrowserRouter → Routes → Route


 BrowserRouter provides Routing capablities.
 Routes lets you match the specific route 
 route have the logic which component will render when we will hit the url
*/

// You could use the <a> tag, but it will reload the page
// and refetch the entire HTML, CSS, and JavaScript files.
// React app restart hoti hai context lost means if the data becomes 5 by clicking on the button it will become again 0 [component state resets to its initial value.]
//Link tag overcomes all this issues  that comes with the <a>. 

import './App.css'
import Login from './components/Login'
import NotDefined from './components/NotDefined'
import Details from './components/Details'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom' 
import { Link } from 'react-router-dom'

// we will wrap evey route  inside the browserRouter and write the routes
function App() {
 return <div>

this will appear on all pages

 <BrowserRouter>
{/* u can not use Link outside the BrowserRouter */}

{/* Link (to)  ===  Route (path)     IMPORTANT RULE FOR LINK TO WORK */}
<Link to="/login"style={{
margin:20
  }}>Login</Link>


{/* syntax is almost same as <a href ="https://www.google.com" >something </a> */}
<Link to ='/details' style={{
margin:20
    }}> details </Link>
  


  <Routes>

        {/*  this takes 2 args 
        path --> url  
        element --> the element that will render on hitting that Route
        */}

    <Route path='/login' element={<Login></Login>}>  
    </Route>

{/* other than defined route we will hit this route */}
<Route path='*' element={<NotDefined></NotDefined>}>

</Route>

<Route path='/details' element={<Details name="kabir"></Details>}>


</Route>
  </Routes>
 </BrowserRouter>

</div>
}

export default App
