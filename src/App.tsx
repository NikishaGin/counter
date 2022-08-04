import React, {ChangeEvent, useRef, useState} from 'react';
import './App.css';


function App() {
  let [counter, setCounter] = useState(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [message, setMessage] = useState<string>('')

  const incButtonHandler = () => {setCounter(counter + 1)}

  const resetButtonHandler = () => {setCounter(0)}

    const set = () => {
        setCounter(minValue)
        setMessage('')
    }
    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
      setMinValue(+e.currentTarget.value)
    }
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
      setMaxValue(+e.currentTarget.value)
    }

  return (
    <div className="App">
        <input type={"number"} value={minValue} onChange={changeMinValue}/> min value
        <input type={"number"} value={maxValue} onChange={changeMaxValue}/> max value
        <button onClick={set}>SET</button>
        <h3 className={counter === maxValue ? "red" : "counter"} >{message ? message : counter}</h3>
        <Button maxValue={maxValue} inc={incButtonHandler} reset={resetButtonHandler} counter={counter}/>
    </div>
  );
}


type buttonType = {
    inc:()=>void
    reset:()=>void
    counter: number
    maxValue: number

}

export const Button = (props: buttonType) => {
    return <div className="buttonIncReset">
        <button disabled={props.counter >= props.maxValue} onClick={props.inc}>INC</button>
        <button onClick={props.reset}>RESET</button>
    </div>
}

export default App;
