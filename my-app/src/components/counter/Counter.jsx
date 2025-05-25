import { useState } from 'react';
import './Counter.css';

export default function Counter() {
    const [count, setCount] = useState(1);

    const plus = () => setCount(count + 1);
    const minus = () => setCount(count - 1);

    return (
        <div className='Counter'>
            <button onClick={plus}>+</button>
            <span>{count}</span>
            <button onClick={minus}>-</button>
        </div>
    )
}
