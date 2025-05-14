"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const wordList_json_1 = __importDefault(require("./wordList.json"));
require("./App.css");
const HangmanDrawing_tsx_1 = require("./components/HangmanDrawing.tsx");
const HangmanWord_tsx_1 = require("./components/HangmanWord.tsx");
const Keyboard_tsx_1 = require("./components/Keyboard.tsx");
function App() {
    const [solution, setSolution] = (0, react_1.useState)("");
    const [guessedLetters, setGuessedLetters] = (0, react_1.useState)([]);
    const incorrectLetters = guessedLetters.filter((letter) => !solution.includes(letter));
    const isLoser = incorrectLetters.length >= 6;
    const isWinner = solution.split("").every((letter) => guessedLetters.includes(letter));
    function addGuessedLetter(key) {
        if (guessedLetters.includes(key)) {
            return;
        }
        setGuessedLetters(currentLetters => [...currentLetters, key]);
    }
    (0, react_1.useEffect)(() => {
        const handler = (e) => {
            const key = e.key;
            if (!key.match(/^[a-z]$/))
                return;
            e.preventDefault();
            addGuessedLetter(key);
        };
        setSolution(wordList_json_1.default[Math.floor(Math.random() * wordList_json_1.default.length)]);
        document.addEventListener("keypress", handler);
        return () => {
            document.removeEventListener("keypress", handler);
        };
    }, []);
    const handleButtonClick = (letter) => {
        addGuessedLetter(letter);
    };
    return (<div style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            margin: "0 auto",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <HangmanDrawing_tsx_1.HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
            <HangmanWord_tsx_1.HangmanWord guessedLetters={guessedLetters} solution={solution}/>
            <div style={{ alignSelf: "center", width: "200%" }}>
                <Keyboard_tsx_1.Keyboard activeLetters={guessedLetters.filter(letter => solution.includes(letter))} handleButtonClick={handleButtonClick} inactiveLetters={incorrectLetters}/>
            </div>
        </div>);
}
exports.default = App;
/*
    Need to track which letter the user had guessed.
    Need to track whether the game has been won or lost.
    Need to check if the current letter guess is in the word.
 */ 
