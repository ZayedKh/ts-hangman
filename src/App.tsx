import {useState} from "react";
import words from "./wordList.json";
import './App.css'

function App() {

    const [solution, setSolution] = useState(() => {
        return words[Math.floor(Math.random() * words.length)];
    });

    const [guessedLetters, setGuessedLetters] = useState<string>([]);

    return (
        <>
            <h1>
                Solution: {solution}
            </h1>
        </>
    )
}

export default App

/*
    Need to track which letter the user had guessed.
    Need to track whether the game has been won or lost.
    Need to check if the current letter guess is in the word.
 */