import React, { useState } from "react";
import styles from './my-style.module.css';
import soundOff from '../../assets/sound_off.png';
import soundOn from '../../assets/sound_on.png';

const tickSound = require('../../assets/tick.mp3');

function Calculator() {
    const [input, setInput] = useState("0");
    const [soundState, setSoundState] = useState(false);

    // Function to handle button clicks
    const handleButtonClick = (value: string) => {
        if (input === "0" || input === "Invalid Input!!") {
            setInput(value);
        } else {
            setInput(input + value);
        }
    };

    // Function to clear the input
    const clearInput = () => {
        setInput("0");
    };
    const isFloatingPoint = (input: string): boolean => {
        const floatValue = parseFloat(input);
        return typeof floatValue === "number" && !Number.isNaN(floatValue);
    };
    // // Function to calculate the result
    
    const calculateResult = () => {
        try {
            const regex = /^(\d+(\.\d+)?)([+\-*/])(\d+(\.\d+)?)$/;
            const match = input.match(regex);
    
            if (match) {
                const firstElement = match[1];
                const operator = match[3];
                const secondElement = match[4];
                console.log(firstElement);
                console.log(operator);
                console.log(secondElement);
    
                if (isFloatingPoint(firstElement) || isFloatingPoint(secondElement)) {
                    const numericValue = parseFloat(firstElement);
                    const numericValue1 = parseFloat(secondElement);
                    const concatenatedString = numericValue.toString() + operator + numericValue1.toString();
                    const result = eval(concatenatedString);
    
                    if (isNaN(result)) {
                        setInput("Invalid Input!!");
                    } else {
                        setInput(result.toString());
                    }
                }
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    
    // remove last character
    const backspace = () => {
        if (input !== "") {
        setInput(input.toString().slice(0, -1));
       } else setInput((prev) => prev.slice(0, -1));
    };
    // Function to calculate percentage
    const calculatePercentage = () => {
        try {
            const inputValue = parseFloat(input);
            if (!isNaN(inputValue)) {
                const percentageValue = (inputValue / 100).toString();
                setInput(percentageValue);
            } else {
                setInput("Invalid Input!!");
            }
        } catch (error) {
            setInput("Invalid Input!!");
        }
    };

    const randomNumber = () => { return Math.random() * 256 | 0; }
    const mouseOverEvent = (event: any) => {
        if (soundState) {
            try {
                const audio = new Audio(tickSound);
                audio.play();
            } catch (err) {
                console.log("🚀 ~ file: Calculator.tsx:60 ~ mouseOverEvent ~ err:", err);
            }
        }
        const color = "rgba(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ",0.2)";
        event.target.style.background = color;
    };
    
    const mouseOutEvent = (event: any) => {
        event.target.style.background = "";
    }

    const toggleSound = () => {
        setSoundState(!soundState);
    }

    return (
        <div className={styles.container1}>
            
      <div className={styles.calculator}>
            <span className={styles.soundButton} >
                {soundState ? (
                    <>
                        <img src={soundOn} width="30" height="30" onClick={toggleSound} alt="sound on" style={{float:"right"}}/>
                    </>
                ) : (
                    <>
                        <img src={soundOff} width="30" height="30" onClick={toggleSound} alt="sound off" style={{float:"right"}}/>
                    </>
                )}
            </span>
        <textarea id="inputBox" className={styles.inputBoxs} value={input} onChange={(e) => setInput(e.target.value)} placeholder="0" />
        
        <div>
            <span className={styles.span} onClick={() => clearInput()} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>AC</span>
            <span className={styles.span} onClick={() => backspace()} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>DE</span>
            <span className={styles.span} onClick={() => calculatePercentage()} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>%</span>
            <span className={styles.span} onClick={() => handleButtonClick("/")} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>/</span>
        </div>
        <div>
            <span className={styles.span} onClick={() => handleButtonClick("7")} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>7</span>
            <span className={styles.span} onClick={() => handleButtonClick("8")} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>8</span>
            <span className={styles.span} onClick={() => handleButtonClick("9")} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>9</span>
            <span className={styles.span} onClick={() => handleButtonClick("*")} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>*</span>
        </div>
        <div>
            <span className={styles.span} onClick={() => handleButtonClick("4")} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>4</span>
            <span className={styles.span} onClick={() => handleButtonClick("5")} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>5</span>
            <span className={styles.span} onClick={() => handleButtonClick("6")} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>6</span>
            <span className={styles.span} onClick={() => handleButtonClick("-")} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>-</span>
        </div>
        <div>
            <span className={styles.span} onClick={() => handleButtonClick("1")} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>1</span>
            <span className={styles.span} onClick={() => handleButtonClick("2")} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>2</span>
            <span className={styles.span} onClick={() => handleButtonClick("3")} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>3</span>
            <span className={styles.span} onClick={() => handleButtonClick("+")} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>+</span>
        </div>
        <div>
            <span className={styles.span} onClick={() => handleButtonClick("00")} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>00</span>
            <span className={styles.span} onClick={() => handleButtonClick("0")} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>0</span>
            <span className={styles.span} onClick={() => handleButtonClick(".")} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>.</span>
            <span className={styles.span} onClick={() => calculateResult()} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }}>=</span>
        </div>
       
      </div>
    </div>
    )
}
    
export default Calculator;
