"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keyboard = Keyboard;
const Keyboard_module_css_1 = __importDefault(require("../modules/Keyboard.module.css"));
const KEYS = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
function Keyboard({ handleButtonClick, activeLetters, inactiveLetters }) {
    return <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
            gap: ".5rem",
        }}>
        {KEYS.map((letter) => {
            const isActive = activeLetters.includes(letter);
            const isInactive = inactiveLetters.includes(letter);
            return <button key={letter} className={`${Keyboard_module_css_1.default.btn} ${isActive ? Keyboard_module_css_1.default.active : ""} ${isInactive ? Keyboard_module_css_1.default.inactive : ""}`} disabled={isInactive || isActive} onClick={() => handleButtonClick(letter)}>
                {letter}
            </button>;
        })}
    </div>;
}
