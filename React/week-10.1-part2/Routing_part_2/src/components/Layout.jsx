import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        header
        {/* in this layout the component will render according to the child routes you hit
        if u hit /about route then <About></About> will take place of the Outlet
  */}
        
        <Outlet/>  
        footer
    </div>
  )
}

export default Layout