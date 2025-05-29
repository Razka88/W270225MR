import { useState } from 'react'
import './TicTacToe.css'

export default function TicTacToe() {
    const [xIsNext, setXIsNext] = useState(true);

    return (
        <>
            <h2>התור של {xIsNext ? 'X' : 'O'}</h2>

            <div className="TicTacToe">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}
