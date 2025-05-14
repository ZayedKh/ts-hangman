"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HangmanWord = HangmanWord;
function HangmanWord({ guessedLetters, solution }) {
    return <div style={{
            gap: ".25rem",
            fontSize: "6rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "monospace",
        }}>
        {solution.split("").map((letter, index) => (<span style={{
                borderBottom: ".1em solid black",
                margin: "0.1em",
                marginTop: "1em",
            }} key={index}>
                <span style={{
                visibility: guessedLetters.includes(letter) ? "visible" : "hidden",
            }}>
                    {letter}
                </span>
            </span>))}
    </div>;
}
