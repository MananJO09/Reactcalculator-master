import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setErrorMessage] = useState('');
  const [success, setSuccessMessage] = useState('');

  const opCalculation = (operator) => {
    //logic for calculator
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
      setErrorMessage('Error!');

      if (!num1) {
        setResult('Num1 Cannot Be Empty')
      } else {
        setResult('Num2 Cannot Be Empty')
      }
      setSuccessMessage('')
    }
    else {
      setSuccessMessage('Sucsess');
      setErrorMessage('');

      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);
      switch (operator) {
        case '+':
          setResult('Result:  ' + (n1 + n2));
          break;
        case '-':
          setResult('Result:  ' + (n1 - n2));
          break;
        case '*':
          setResult('Result:  ' + (n1 * n2));
          break;
        case '/':
          setResult('Result:  ' + (n1 / n2));
          break;
        default:
          setResult('');
      }
    }
    setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage(""); // Clear success message after 5 seconds
    }, 10000);
  };

  return (
    <div className='container'>
      <div className='calculator'>
        <form action=''>
          <h1>React Calculator</h1>
          <div className='display'>
            <input
              type='text'
              placeholder='Num 1'
              value={num1}
              onChange={e => setNum1(e.target.value)}
            />
            <input
              type='text'
              placeholder='Num 2'
              value={num2}
              onChange={e => setNum2(e.target.value)}
            />
          </div>
          <div>
            <button onClick={() => opCalculation('+')}>+</button>
            <button onClick={() => opCalculation('-')}>-</button>
            <button onClick={() => opCalculation('*')}>*</button>
            <button onClick={() => opCalculation('/')}>/</button>
          </div>
          {
            error && <p className="error">{error}</p>
          }
          {
            success && <p className='success'>{success}</p>
          }
          {
            result && <p className='result'>{result}</p>
          }
        </form>
      </div>
    </div>
  );
}

export default App;
