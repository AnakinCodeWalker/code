
import './App.css'

function App() {

  return (
    <>
     <div className='grid  grid-cols-12'>
      <div className='bg-blue-300 col-span-5'>
        child 1 
        </div>
        <div className='bg-pink-300 col-span-2'>
          child 2
        </div>
        <div className='bg-teal-400 col-span-4'>
          child 3
        </div>
     </div>
    </>
  )
}

export default App
