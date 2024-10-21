import { useState } from "react";
import escudo from '../media/escudo.png';

export default function Calculator() {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [ans, setAns] = useState<number | null>(null);

    const adder = () => {
        setAns(first + second);
    }
    
    const subber = () => {
        setAns(first - second);
    }

    const multiplier = () => {
        setAns(first * second);
    }

    const divider = () => {
        setAns(first / second);
    }

    const powNums = () => {
        let result = first;
        if (second < 0) {
            const num2 = second * -1;
            for (let c = 1; c < num2;) {
                result = result * first;
                c++;
            }
            result = 1 / result;
        } else {
            for (let c = 1; c < second;) {
                result = result * first;
                c++;
            }
        }

        if (second === 0) {
            result = 1;
        }
    }

    const clearer = () => {
        setFirst(0);
        setSecond(0);
        setAns(null);
    }
    
    return (
        <>
            <body id="flag">
            <div>
                <h1 id="calc"><em><span id="one">T</span><span id="two">h</span><span id="one">e</span> <span id="two">S</span><span id="one">p</span><span id="two">a</span><span id="one">n</span><span id="two">i</span><span id="one">s</span><span id="two">h</span> <span id="one">C</span><span id="two">a</span><span id="one">l</span><span id="two">c</span><span id="one">u</span><span id="two">l</span><span id="one">a</span><span id="two">t</span><span id="one">o</span><span id="two">r</span><span id="one">!</span></em></h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <input id="first" type="number" placeholder="First number" value={first} onChange={(e) => setFirst(parseFloat(e.target.value) || 0)}/>
                <input id="second" type="number" placeholder="Second number" value={second} onChange={(e) => setSecond(parseFloat(e.target.value) || 0)}/>
                <br/>
                <button id="sum" onClick={adder}>+</button>
                <button id="sub" onClick={subber}>-</button>
                <button id="mul" onClick={multiplier}>*</button>
                <button id="div" onClick={divider}>/</button>
                <button id="pow" onClick={powNums}>**</button>
                <button id="clr" onClick={clearer}><strong>Clear</strong></button>
                <p id="calc"><strong><em>Result: </em></strong></p>
                
                {ans !== null && (ans < 0 ? (
                    <h3 id="alt-output">{ans}</h3>
                    )
                    :
                    (<h3 id="output">{ans}</h3>)
                )}
            </div>
            <img id="escudo" src={escudo} alt="shield of spain"/>
            </body>
        </>
    );
}