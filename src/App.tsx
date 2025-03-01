import {useState} from "react";
import words from "./wordList.json";
import './App.css'
import {HangmanDrawing} from "./components/HangmanDrawing.tsx";
import {HangmanWord} from "./components/HangmanWord.tsx";
import {Keyboard} from "./components/Keyboard.tsx";

function App() {

    const [solution, setSolution] = useState(() => {
        return words[Math.floor(Math.random() * words.length)];
    });

    const [guessedLetters, setGuessedLetters] = useState<string>([]);

    return (
        <div style={{
            maxWidth: "min(100vw, 800px)",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            margin: "0 auto",
            alignItems: "center"
        }}>
            <div style={{
                fontSize: "2rem",
                textAlign: "left",
            }}>
                Lose Win
            </div>
            <HangmanDrawing/>
            <HangmanWord/>
            <div style={{alignSelf: "stretch", width: "100%"}}>
                <Keyboard/>
            </div>
        </div>
    )
}

export default App

/*
    Need to track which letter the user had guessed.
    Need to track whether the game has been won or lost.
    Need to check if the current letter guess is in the word.
 */