import React from 'react'
import { useState, useRef } from 'react'
import ListElement from './components/ListElement';


interface item { id: number }





function App() {
  const [list, setList] = useState<item[]>([])

  const removeTodo = (todoToRemove: number) => {
    let updatedTodo: item[] = list.filter(ls => ls.id !== todoToRemove);
    setList(updatedTodo);
  }

  const addTodo = () => {
    const newTodo = {
      id: list.length + 1
    }
    setList([...list, newTodo])
  }

  return (
    <div className="App bg-slate-900">
      <h1 className='text-5xl text-center'>To do List:</h1>
      <div className="to-do flex flex-col items-center">
        {list.map((todo) => {
          return <ListElement key={todo.id} func={removeTodo} sKey={todo.id} />
        })}
        <button className="bg-slate-700 w-12 rounded-full text-5xl" onClick={addTodo}>
          +
        </button>
      </div>

    </div>
  )
}

export default App
