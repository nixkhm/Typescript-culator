import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

  const operations = ['+', '-', '/', '*', '.'];

  const createDigits = () => {
  const digits = [];
  for (let i = 1; i < 10; i++) {
    digits.push(
      <button onClick={() => updateCalc(i.toString())} 
      key = {i}> {i} </button>
    )
  }
  return digits
}

  const updateCalc = (value:String) => {
    if(
      operations.includes(value.toString()) && calc === '' ||
      operations.includes(value.toString()) && operations.includes(calc.slice(-1)
      )
    ){
      return;
    }
    setCalc(calc + value);

    if(!operations.includes(value.toString())){
      setResult(eval(calc + value).toString().substring(0,12));
    }
  }

const calculate = () => {
  const ans = eval(calc).toString();
  setCalc(ans.substring(0,12));
}

const del = () => {
  if(calc != ''){
    const value = calc.slice(0, -1);
    setCalc(value);
  }
}
  return ( 
    <div className="App">
      <div className="calculator">
        
        <div className="display">
          {result ? <span>({result})</span> : ''}
          {calc || '0'}
        </div>

        <div className="operator">
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('/')}>÷</button>
          <button onClick={() => updateCalc('*')}>*</button>
          
          <button onClick={del}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={() => updateCalc('0')}>0</button>

          <button onClick={calculate}>ENTER</button>
        </div>
      </div>
    </div>
  )
}

export default App
