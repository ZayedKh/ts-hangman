type HangmanWordProps = {
    guessedLetters: string [],
    solution: string,
}

export function HangmanWord({guessedLetters, solution}: HangmanWordProps) {
    return <div style={{
        gap: ".25rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
    }}
    >
        {solution.split("").map((letter: string, index: number) => (
            <span style={{
                borderBottom: ".1em solid black",
                margin: "0.1em",
                marginTop: "1em",
            }}
                  key={index}>
                <span style={{
                    visibility: guessedLetters.includes(letter) ? "visible" : "hidden",
                }}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
}