
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import GetTodos from './components/GetTodos'

const client = new  QueryClient()
function App() {
  return <>
    <QueryClientProvider client={client}>
      App
      <GetTodos/>

    </QueryClientProvider>
  </>
}
export default App
