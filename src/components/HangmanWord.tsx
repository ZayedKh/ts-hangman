export function HangmanWord() {
    const word: string = "test";
    const guessedLetters: string[] = ["t"];
    return <div style={{
        display: "flex",
        gap: ".25rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
    }}
    >
        {word.split("").map((letter: string, index: number) => (
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