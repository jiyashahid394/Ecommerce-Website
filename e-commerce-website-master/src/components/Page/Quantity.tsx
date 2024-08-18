"use client"
import { useState } from "react";

function Quantity() {
    const [count,setcount] =useState(1);

    function increment() {
        setcount(count + 1)
    };

    function decrement() {
        setcount(count<=1 ? 1 : count-1)
    };
    
return(
    <div className="flex gap-4 items-center justify-start mt-7">
    <button className="h-9 w-9 tracking-tight shadow-sm shadow-gray-500 rounded-full border border-gray-200 flex justify-center items-center" onClick={decrement}>-</button>
    <div className="font-semibold">{count}</div>
    <button className="h-9  w-9 tracking-tight shadow-sm shadow-gray-500 rounded-full border border-gray-200 flex justify-center items-center" onClick={increment}>+</button>
    </div>
)
}

export default Quantity;