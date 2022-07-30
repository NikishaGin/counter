import React, {ChangeEvent, useRef, useState} from 'react';
import './App.css';


function App() {
  let [counter, setCounter] = useState(0)

  const incButtonHandler = () => {setCounter(counter + 1)}

  const resetButtonHandler = () => {setCounter(0)}


    const inputRef = useRef<HTMLInputElement>(null)

    const set = () => {
        const el = inputRef.current as HTMLInputElement
        setCounter(+el.value)
    }


  return (
    <div className="App">
        <input type={"number"} ref={inputRef}/> max value
        <button onClick={set}>SET</button>
        <h3 className={counter === 5 ? "red" : "counter"} >{counter}</h3>
        <Button inc={incButtonHandler} reset={resetButtonHandler} counter={counter}/>
    </div>
  );
}


type buttonType = {
    inc:()=>void
    reset:()=>void
    counter: number

}

export const Button = (props: buttonType) => {
    return <div className="buttonIncReset">
        <button disabled={props.counter >= 5} onClick={props.inc}>INC</button>
        <button onClick={props.reset}>RESET</button>
    </div>
}








export default App;
