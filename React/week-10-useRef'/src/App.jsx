
import './App.css'
import Counter from './Components/Counter'
import UseRef from './Components/UseRef'
import usePost from './hooks/usePost'


const App = () => {
  const { post, loading } = usePost()

  return (
    <div>
     <p>
       {post?.title}
      {loading}
     </p>
      <Counter></Counter>
      <UseRef></UseRef>

    </div>
  )
}


export default App
