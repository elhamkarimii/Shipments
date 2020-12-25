
import React from 'react'

interface Count  {
    value: number,
    handleClick: (value:number) => void
}
export default function Counter({ value, handleClick }: Count) {
    
    return (
        <div>
            <label>{value}</label>
            <button onClick={()=>handleClick(1)}>+</button>
            <button onClick={()=>handleClick(-1)}>-</button>
        </div>
    )
}
