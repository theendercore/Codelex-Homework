import React from 'react'
import { useState } from 'react'


interface item { id: number, todo: JSX.Element }



const ListElement: React.FC = (remove:any) => {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <div className='ListElement my-7'>
      <input
        type="checkbox"
        className="m-3 h-10 w-10 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        onClick={() => setChecked(!checked)} />
      <input
        type="text"
        className={(checked ? 'line-through' : '') + " bg-slate-900 border-b-2 border-slate-300"} />
      <button className="" onClick={ remove }>x</button>
    </div>
  )
}



function App() {
  const [list, setList] = useState<item[]>([])

  const removeTodo = (todoToRemove: item) => {
    let updatedTodo: item[] = list.filter(todo => todo.todo.key != todoToRemove.todo.key);
    setList(updatedTodo);
  }

  const addTodo = () => {
    const newTodo = {
      id: list.length + 1,
      todo: <ListElement />
    }

    setList([...list, newTodo])
  }

  return (
    <div className="App bg-slate-900">
      <h1 className='text-5xl text-center'>To do List:</h1>
      <div className="to-do flex flex-col content-center">
        <ListElement />
        {list.map((todo) => {
          return <ListElement key={todo.id}/>
        })}
        <button className="bg-slate-700 rounded-full text-5xl" onClick={addTodo}>
          +
        </button>
      </div>

    </div>
  )
}

export default App
