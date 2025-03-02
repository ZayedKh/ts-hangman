const HEAD = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px",
    }}></div>
)

const BODY = (
    <div style={{
        height: "100px",
        width: "10px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: 0,
    }}></div>
)

const RIGHT_ARM = (
    <div style={{
        width: "75px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: "-65px",
        rotate: "-30deg",
        transformOrigin: "right bottom",
    }}></div>
)

const LEFT_ARM = (
    <div style={{
        width: "75px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: "-5px",
        rotate: "30deg",
        transformOrigin: "left bottom",
    }}></div>
)

const RIGHT_LEG = (
    <div style={{
        height: "100px",
        width: "10px",
        background: "black",
        position: "absolute",
        top: "220px",
        right: "0px",
        rotate: "-30deg",
        transformOrigin: "left top",
    }}></div>
)

const LEFT_LEG = (
    <div style={{
        height: "100px",
        width: "10px",
        background: "black",
        position: "absolute",
        top: "220px",
        right: "0px",
        rotate: "30deg",
        transformOrigin: "right top",
    }}></div>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number;
}

export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {
    return <div style={{position: "relative"}}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{
            position: "absolute",
            height: "50px",
            width: "10px",
            background: "black",
            marginLeft: "310px"
        }}></div>
        <div style={{height: "10px", width: "200px", background: "black", marginLeft: "120px"}}></div>
        <div style={{height: "400px", width: "10px", background: "black", marginLeft: "120px"}}></div>
        <div style={{height: "10px", width: "250px", background: "black"}}></div>
    </div>
}