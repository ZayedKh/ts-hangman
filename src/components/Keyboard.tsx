import styles from "../modules/Keyboard.module.css"

const KEYS: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

type KeyboardProps = {
    handleButtonClick: (letter: string) => void
    activeLetters: string[]
    inactiveLetters: string[]
}

export function Keyboard({handleButtonClick, activeLetters, inactiveLetters}: KeyboardProps) {
    return <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
    }}>
        {KEYS.map((letter: string) => {
            const isActive: boolean = activeLetters.includes(letter);
            const isInactive: boolean = inactiveLetters.includes(letter);
            return <button key={letter}
                           className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}
                           disabled={isInactive || isActive}
                           onClick={() => handleButtonClick(letter)}>
                {letter}
            </button>
        })}
    </div>

}