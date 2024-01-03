import {useState} from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
interface SquareProps {
    value: "X" | "O";
    onSquareClick: () => void;
}
const Square = (props: SquareProps) => {
    const {value, onSquareClick} = props;

    return (
        <button style={{width: 150, height: 150, border: "1px solid blue", position: "relative"}} className={"square"} onClick={onSquareClick}>
            <div style={{position: "absolute", top: "50%", left: "50%", fontWeight: "bold"}}>
                {value}
            </div>
        </button>
    )
}

// @ts-ignore
function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i: number) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }


    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    // @ts-ignore
    } else if (squares.every(square => square !== null)) {
        status = 'It\'s a draw!';
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }


    const restart= () => onPlay(Array(9).fill(null));

    return (
        <>
            <Typography >{status}</Typography>
            <div>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
                <Button onClick={() => restart()} variant={"contained"}>
                    Restart
                </Button>
        </>
    );
}

export const TicTacToe = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    const handlePlay = (nextSquares: any) =>{
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>

        </div>
    );
}

const calculateWinner = (squares: string[]) => {
    const lines: number[][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
};