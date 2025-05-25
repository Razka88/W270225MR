import { useState } from 'react';
import './Counter.css';

export default function Counter() {
    const [count, setCount] = useState(1);
    
    return (
        <div className='Counter'>
            <button onClick={() => setCount(count + 1)}>+</button>
            <span>{count}</span>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}
