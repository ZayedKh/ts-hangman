import {useState, useEffect} from "react";
import words from "./wordList.json";
import './App.css'
import {HangmanDrawing} from "./components/HangmanDrawing.tsx";
import {HangmanWord} from "./components/HangmanWord.tsx";
import {Keyboard} from "./components/Keyboard.tsx";

function App() {

    const [solution, setSolution] = useState<string>("");

    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const incorrectLetters: string[] = guessedLetters.filter((letter: string): boolean => !solution.includes(letter));

    const isLoser = incorrectLetters.length >= 6;
    const isWinner = solution.split("").every((letter: string): boolean => guessedLetters.includes(letter));

    function addGuessedLetter(key: string): void {
        if (guessedLetters.includes(key)) {
            return;
        }

        setGuessedLetters(currentLetters => [...currentLetters, key]);
    }

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;
            if (!key.match(/^[a-z]$/)) return;

            e.preventDefault();
            addGuessedLetter(key);
        }

        setSolution(words[Math.floor(Math.random() * words.length)]);

        document.addEventListener("keypress", handler);

        return () => {
            document.removeEventListener("keypress", handler);
        }
    }, []);

    const handleButtonClick = (letter: string) => {
        addGuessedLetter(letter);
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            margin: "0 auto",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
            <HangmanWord guessedLetters={guessedLetters} solution={solution}/>
            <div style={{alignSelf: "center", width: "200%"}}>
                <Keyboard activeLetters={guessedLetters.filter(letter => solution.includes(letter))}
                          handleButtonClick={handleButtonClick}
                          inactiveLetters={incorrectLetters}/>
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