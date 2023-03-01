import React, { useRef, useState } from 'react'

export default function ListElement({ func, sKey }: { func: CallableFunction, sKey:number }) {
  const [checked, setChecked] = useState<boolean>(false)
  const todoValueRef = useRef<null | HTMLInputElement>(null)

  return (
    <div className='ListElement my-2 flex items-center'>
      <input
        type="checkbox"
        className="m-3 h-8 w-8 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        onClick={() => setChecked(!checked)} />
      <input
        ref={todoValueRef}
        type="text"
        className={((checked && todoValueRef.current?.value.trim() !== "") ? 'line-through ' : '') + "bg-slate-900 border-b-2 border-slate-300 m-3 text-xl"} />
      <button className="m-3 h-6 w-6 bg-cyan-900 rounded-full text-center" onClick={() => { func(sKey) }}>x</button>
    </div>
  )
}
}
