import { useState } from 'react'
import './App.css'

function App() {
  const [inputTemp, setinputTemp] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('celsius');
  const [convertedTemp, setConvertedTemp] = useState(null);

  const convertTemperature = () => {
    const temperature = parseFloat(inputTemp);

    if (isNaN(temperature)) {
      alert('Please enter a valid number for temperature.');
      return;
    }

    let convertedTemp;

    if (selectedUnit === 'celsius') {
      convertedTemp = (temperature * 9/5) + 32;
    } else if (selectedUnit === 'fahrenheit') {
      convertedTemp = (temperature - 32) * 5/9;
    } else {
      alert('Invalid unit selected.');
      return;
    }

    setConvertedTemp(convertedTemp.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Temperature Converter</h1>
      <div className="input-field">
        <input
          type="text"
          placeholder="Enter temperature"
          value={inputTemp}
          onChange={(e) => setinputTemp(e.target.value)}
        />
        <select
          value={selectedUnit}
          onChange={(e) => setSelectedUnit(e.target.value)}
        >
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
        <button onClick={convertTemperature}>Convert</button>
      </div>
      {convertedTemp !== null && (
        <p>{convertedTemp} {selectedUnit === 'celsius' ? 'Fahrenheit' : 'Celsius'}</p>
      )}
    </div>
  );
}
export default App
