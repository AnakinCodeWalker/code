import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { setIsLoggedIn, setUser } from './reducers/authSlice'

//  dispatch uses reducer to change value in the  store
const App = () => {
  const dispatch = useDispatch()
  const { user ,isLoggedIn } = useSelector((state) => state.auth) // take the key of the store

  // dispacth takes a reducer
  dispatch(setUser({ name: "prince" }))
  dispatch(setIsLoggedIn(true))  // reducer kai via store mai change


  return (
    <div style={{
      font: 500,
      textAlign: "center",
      background: "white"
    }}>
      <div style={{backgroundColor:"black"}}>{`${user?.name}  is loggedin ${isLoggedIn ? "yes its true" : " no its false" }`}</div>
      App
    </div>
  )
}


export default App

