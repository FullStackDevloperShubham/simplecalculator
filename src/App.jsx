import Display from './components/Display';
import style from './App.module.css'
import ButtonContainer from './components/ButtonContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [calVal, setCalVal] = useState("")

  const onButtonClick = (buttonText) => {
    // console.log(buttonText)
    if (buttonText === 'C') {
      setCalVal('')
    }
    else if (buttonText === '=') {
      const result = eval(calVal)
      setCalVal(result)
    }
    else {
      const newDispalyValue = calVal + buttonText
      setCalVal(newDispalyValue)
    }
  }


  return (
    <div className={style.calculator}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  )
}

export default App
