import { Box } from "@mui/material";
import { useState } from "react";

function Game() {
    const [board, setBoard] = useState<string[][]>([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]);
    const [isXTurn, setIsXTurn] = useState<boolean>(true);
    const [gameOver, setGameOver] = useState<boolean>(false);

    const checkGameOver = () => {
        // Check for a win or a draw
        for (let row = 0; row < 3; row++) {
            if (
                board[row][0] !== "" &&
                board[row][0] === board[row][1] &&
                board[row][1] === board[row][2]
            )
                return true; // Row win
        }

        for (let col = 0; col < 3; col++) {
            if (
                board[0][col] !== "" &&
                board[0][col] === board[1][col] &&
                board[1][col] === board[2][col]
            )
                return true; // Column win
        }

        if (
            board[0][0] !== "" &&
            board[0][0] === board[1][1] &&
            board[1][1] === board[2][2]
        )
            return true; // Diagonal win (top-left to bottom-right)

        if (
            board[0][2] !== "" &&
            board[0][2] === board[1][1] &&
            board[1][1] === board[2][0]
        )
            return true; // Diagonal win (top-right to bottom-left)

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++)
                if (board[row][col] === "")
                    return false; // Game not over yet
        }

        return true; // Draw
    };

    const handleCellClick = (rowIndex: number, colIndex: number) => {
        if (!gameOver && board[rowIndex][colIndex] === "") {
            const newBoard = [...board];
            newBoard[rowIndex][colIndex] = isXTurn ? "X" : "O";
            setBoard(newBoard);

            if (checkGameOver()) {
                setGameOver(true);
                setTimeout(() => {
                    setBoard([
                        ["", "", ""],
                        ["", "", ""],
                        ["", "", ""]
                    ]);
                    setGameOver(false);
                }, 1500); // Clear the board and restart after 1.5 seconds
            } else
                setIsXTurn(!isXTurn);
        }
    };

    return (
        <table style={{
            margin: "0",
        }}>
            {board.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((cellValue, colIndex) => (
                        <td key={colIndex}>
                            <Cell
                                value={cellValue}
                                onClick={() => handleCellClick(rowIndex, colIndex)}
                            />
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    );
}

type CellProps = {
    value: string;
    onClick: () => void;
};

function Cell({ value, onClick }: CellProps) {
    return (
        <Box
            sx={{
                border: 1,
                borderColor: "black",
                height: "100px",
                width: "100px"
            }}
            margin="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={onClick}
        >
            {value}
        </Box>
    );
}

export default Game;