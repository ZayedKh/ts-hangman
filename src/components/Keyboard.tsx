import styles from "../modules/Keyboard.module.css"

const KEYS: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

export function Keyboard() {
    return <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
        width: "100%",
    }}>
        {KEYS.map((letter: string) => {
            return <button key={letter} className="keyboard">
                {letter}
            </button>
        })}
    </div>

}