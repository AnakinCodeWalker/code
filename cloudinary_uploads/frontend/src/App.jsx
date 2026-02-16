
import './App.css'

function App(){
  return <>

   <form action="http://localhost:3000/api/v1/users/upload" method='post' encType="multipart/form-data">
  <input type="file" name='avatar' accept='image/*' />


<button>upload</button>
  </form> 

<form action="http://localhost:3000/api/v1/users/login" method="post">

<label htmlFor="userName">userName</label>
  <input type="text" id='userName' name='userName' placeholder='pream'  />
  
  <div style={{margin:"6px"}}>
  <label htmlFor="password">password</label>
  <input type='password' id='password' name='password' placeholder='*****'/>
  </div>

  <button type="submit">Login</button>
  </form>

</>

}

export default App
