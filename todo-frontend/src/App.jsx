import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import './App.css'
import Table from './components/Table'
import axios from 'axios'
function App() {
  const [todos, setTodos] = useState("")
  const [isLoading, setIsloading]=useState(true)
  useEffect(()=>{
    fetchData()
  

  },[])
  const fetchData= async()=>{
    try {
const response =await axios.get("http://127.0.0.1:8000/api/todo/")
   setTodos(response.data)
   setIsloading(false)
}
    catch(error){
console.log(error);
    }
  }
  return (
    <div className='bg-indigo-100 px-8 min-h-screen'>
     <nav className='pt-8'>
      <h1 className='text-5xl text-center pb-12'>Todo-list</h1>
      </nav>
      <TodoForm 
            setTodos={setTodos}
            fetchData={fetchData}
            />
      <Table todos={todos} 
      setTodo={setTodos}
      isLoading={isLoading} 
      fetchData={fetchData}
      />
      
    </div>
  )
}

export default App
