import React, { useState } from 'react'

export default function () {
    const [count, setCount] = useState(0)
    return <div>
        <button onClick={() => {
            window.setTimeout(()=>setCount((pre)=>pre + 1),1000)
            
        }}>+</button>
        {count}
        <button onClick={() => {
            setCount(count - 1)
        }}>-</button>
    </div>
}