// src/calc/calculator.js
import React, { useState } from 'react';
import styles from '../style/calc.css';

const Calculator = () => {
    const [calc, setCalc] = useState("");
    const [operChk, setOperChk] = useState(true);
    const [dotChk, setDotChk] = useState(true);

    const getNum = (e) => {
        setCalc((prev) => prev + e.target.value);
        setOperChk(true);
    };

    const getOper = (e) => {
        if(calc.length === 0){
            alert("The first character cannot be an operator.");
            clearAll();
            return;
        }
        if (operChk) {
            setCalc((prev) => prev + e.target.value);
            setOperChk(false);
        }
    };

    const getDot = (e) => {
        if (calc.length === 0) {
            return;
        }

        if (dotChk) {
            setCalc((prev) => prev + e.target.value);
            setDotChk(false);
        }
    };

    const getResult = () => {
        let replaceStr = calc.replace(/×/gi, "*").replace(/÷/gi, "/");
        // if ()
        if (isNaN(eval(replaceStr))) {
            setCalc("");
        } else if (eval(replaceStr) === Infinity) {
            alert("Division by 0 is not allowed");
            setCalc("");
            return false;
        } else {
            setCalc((prev) => eval(replaceStr));
        }
    };

    const delCalc = () => {
        setDotChk(true);
        setOperChk(true);
        let str = String(calc).slice(0, -1);
        setCalc((prev) => str);
    };

    const clearAll = () => {
        setDotChk(true);
        setCalc("");
    };
    return (
        <div className="form-container">
        <div className="MainContainer">
            <h1>Kuks Calculator</h1>
            <input className="InputBar" readOnly value={calc}/>
            <div className="ButtonContainer">
                <button className={styles.Button} onClick={clearAll}>AC</button>
                <button className={styles.Button} onClick={delCalc}>DEL</button>
                <button className={styles.CalButton} value="%" onClick={getOper}>%</button>
                <button className={styles.CalButton} value="÷" onClick={getOper}>÷</button>

                <button className={styles.Button} value={7} onClick={getNum}>7</button>
                <button className={styles.Button} value={8} onClick={getNum}>8</button>
                <button className={styles.Button} value={9} onClick={getNum}>9</button>
                <button className={styles.CalButton} value="×" onClick={getOper}>×</button>

                <button className={styles.Button} value={4} onClick={getNum}>4</button>
                <button className={styles.Button} value={5} onClick={getNum}>5</button>
                <button className={styles.Button} value={6} onClick={getNum}>6</button>
                <button className={styles.CalButton} value="-" onClick={getOper}>-</button>

                <button className={styles.Button} value={1} onClick={getNum}>1</button>
                <button className={styles.Button} value={2} onClick={getNum}>2</button>
                <button className={styles.Button} value={3} onClick={getNum}>3</button>
                <button className={styles.CalButton} value="+" onClick={getOper}>+</button>

                <button className={styles.ZeroButton} value={0} onClick={getNum}>0</button>
                <button className={styles.Button} value="." onClick={getDot}>.</button>
                <button className={styles.CalButton} onClick={getResult}>=</button>
            </div>
        </div>
        </div>
    );

};

export default Calculator;
