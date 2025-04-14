import React, { useState, useEffect } from 'react';
import styles from '../style/calc.css';

const Calculator = () => {
    const [calc, setCalc] = useState("");
    const [operChk, setOperChk] = useState(true);
    const [dotChk, setDotChk] = useState(true);
    const [isCursorVisible, setCursorVisible] = useState(true); // 커서 상태 추가

    const getNum = (value) => {
        setCalc((prev) => prev + value);
        setOperChk(true);
    };

    const getOper = (value) => {
        if (calc.length === 0) {
            alert("The first character cannot be an operator.");
            clearAll();
            return;
        }
        if (operChk) {
            setCalc((prev) => prev + value);
            setOperChk(false);
        }
    };

    const getDot = () => {
        if (calc.length === 0 || !dotChk) return;
        setCalc((prev) => prev + '.');
        setDotChk(false);
    };

    const getResult = () => {
        let replaceStr = calc.replace(/×/gi, "*").replace(/÷/gi, "/");
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

    const handleKeyDown = (event) => {
        const { key } = event;
        if (!isNaN(key)) {
            getNum(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            getOper(key);
        } else if (key === '.') {
            getDot();
        } else if (key === 'Enter') {
            getResult();
        } else if (key === 'Backspace') {
            delCalc();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [calc]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500); // 500ms 간격으로 커서 깜빡임

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <div className="form-container">
            <div className="MainContainer">
                <h1><b>Kuks Calculator</b></h1>
                <div className="InputContainer">
                    <input className="InputBar" readOnly value={calc} />
                    {isCursorVisible && <span className="Cursor">|</span>} {/* 커서 추가 */}
                </div>
                <div className="ButtonContainer">
                    <button className={styles.Button} onClick={clearAll}>AC</button>
                    <button className={styles.Button} onClick={delCalc}>DEL</button>
                    <button className={styles.CalButton} value="%" onClick={() => getOper('%')}>%</button>
                    <button className={styles.CalButton} value="÷" onClick={() => getOper('÷')}>÷</button>

                    <button className={styles.Button} value={7} onClick={() => getNum('7')}>7</button>
                    <button className={styles.Button} value={8} onClick={() => getNum('8')}>8</button>
                    <button className={styles.Button} value={9} onClick={() => getNum('9')}>9</button>
                    <button className={styles.CalButton} value="×" onClick={() => getOper('×')}>×</button>

                    <button className={styles.Button} value={4} onClick={() => getNum('4')}>4</button>
                    <button className={styles.Button} value={5} onClick={() => getNum('5')}>5</button>
                    <button className={styles.Button} value={6} onClick={() => getNum('6')}>6</button>
                    <button className={styles.CalButton} value="-" onClick={() => getOper('-')}>-</button>

                    <button className={styles.Button} value={1} onClick={() => getNum('1')}>1</button>
                    <button className={styles.Button} value={2} onClick={() => getNum('2')}>2</button>
                    <button className={styles.Button} value={3} onClick={() => getNum('3')}>3</button>
                    <button className={styles.CalButton} value="+" onClick={() => getOper('+')}>+</button>

                    <button className={styles.ZeroButton} value={0} onClick={() => getNum('0')}>0</button>
                    <button className={styles.Button} value="." onClick={getDot}>.</button>
                    <button className={styles.CalButton} onClick={getResult}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
