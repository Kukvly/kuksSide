import React from 'react';
import {useState} from 'react';
import styled from "styled-components";

const Calculator = () => {
    const [calc, setCalc] = useState("");
    const [operChk,setOperChk] = useState(true);
    const [dotChk,setDotChk] = useState(true);

    const getNum = (e) => {
        setCalc((prev) => prev + e.target.value);
        setOperChk(true);
    };

    const getOper = (e) => {
        if (operChk){
            setCalc((prev) => prev + e.target.value)
            setOperChk(false);
        }
    };

    const getDot = (e) => {
        if(calc.length === 0){
            return;
        }

        if(dotChk){
            setCalc((prev) => prev + e.target.value)
            setDotChk(false);
        }
    };

    const getResult = () => {
        let replaceStr = calc.replace(/×/gi, "*").replace(/÷/gi, "/");

        if (isNaN(eval(replaceStr))){
            setCalc("");
        } else if (eval(replaceStr) === Infinity){
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

    const allClear = () => {
        setDotChk(true);
        setCalc("");
    };

    return (
        <MainContainer>
            <InputBar readOnly value={{calc}} />
            <ButtonContainer>
                <Button onClick={allClear}>AC</Button>
                <Button onClick={delCalc}>DEL</Button>
                <CalButton value="%" onClick={getOper}>
                    %
                </CalButton>
                <CalButton value="÷" onClick={getOper}>
                    ÷
                </CalButton>
                <Button value={7} onClick={getNum}>
                    7
                </Button>
                <Button value={8} onClick={getNum}>
                    8
                </Button>
                <Button value={9} onClick={getNum}>
                    9
                </Button>
                <CalButton value="×" onClick={getOper}>
                    ×
                </CalButton>
                <Button value={4} onClick={getNum}>
                    4
                </Button>
                <Button value={5} onClick={getNum}>
                    5
                </Button>
                <Button value={6} onClick={getNum}>
                    6
                </Button>
                <CalButton value="-" onClick={getOper}>
                    -
                </CalButton>
                <Button value={1} onClick={getNum}>
                    1
                </Button>
                <Button value={2} onClick={getNum}>
                    2
                </Button>
                <Button value={3} onClick={getNum}>
                    3
                </Button>
                <CalButton value="+" onClick={getOper}>
                    +
                </CalButton>
                <ZeroButton value={0} onClick={getNum}>
                    0
                </ZeroButton>
                <Button value="." onClick={getDot}>
                    .
                </Button>
                <CalButton onClick={getResult}>=</CalButton>
            </ButtonContainer>
        </MainContainer>
    );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const ButtonContainer = styled.div`
  display: grid;
  width: 40%;
  max-width: 450px;
  height: 50%;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const Button = styled.button`
  background-color: #f2f3f5;
  border: none;
  color: black;
  font-size: 1.5rem;
  border-radius: 35px;
  cursor: pointer;
  box-shadow: 3px 3px 3px lightgray;

  &:active {
    margin-left: 2px;
    margin-top: 2px;
    box-shadow: none;
  }
`;

const CalButton = styled(Button)`
  font-size: 2rem;
  color: white;
  background-color: #4b89dc;
`;

const ZeroButton = styled(Button)`
  grid-column: 1/3;
`;

const InputBar = styled.input`
  width: 40%;
  max-width: 450px;
  height: 65px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 30px;
  border: 2px solid #4b89dc;
  text-align: right;
  padding-right: 20px;
  &:focus {
    outline: none;
  }
`;
export default Calculator;