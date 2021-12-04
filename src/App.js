import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(fibo(inputs.kword));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <p>
            Podaj k:
          </p>
          <p>
              <input
              type="number"
              min="0"
              max="40"
              name="kword"
              value={inputs.kword || ""}
              onChange={handleChange}
              />
          </p>
          <input type="submit" value="Oblicz"/>
        </form>
      </header>
    </div>
  );
}

function fibo(n) {
  if (n==0) return 0;
  if (n==1) return 1;
  return fibo(n-1)+fibo(n-2);
}

export default App;