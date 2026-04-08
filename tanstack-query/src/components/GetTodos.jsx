import { useQuery } from '@tanstack/react-query'
import { getTodos } from '../lib/api'

const GetTodos = () => {

  const { data, error, isLoading } = useQuery({

    queryKey: ['todo'],
    queryFn: getTodos,
    retry: false
  })

  if (isLoading)
    return <> loading ... </>

  return (
    <div style={{ color: "white" }}>
      {
        error && <> error 😭 ...</>
      }
      {console.log("data is ", data)}
      <div style={{
        color: "white",
        margin: "100px ",
        border: " 2px solid white"
      }} >
        {data?.slice(0, 10).map((todos) => (
          <p key={todos?.id} >{todos?.title}</p>)
        )}</div>
    </div>
  )
}

export default GetTodos