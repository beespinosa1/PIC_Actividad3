import React, { useState } from 'react';
import ClickExample from './components/ClickExample';
import InputExample from './components/InputExample';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleClick = () => {
    alert(`Actividad 3: Eventos y Listeners\n\n Texto ingresado: ${inputValue}`);
  };

  return (
    <div style={{ textAlign: 'center', margin: 'auto', maxWidth: '600px', paddingTop: '50px' }}>
      <h2>Actividad 3: Eventos y Listeners</h2>
      <h1>Grupo 07</h1>
      <h2>Integrantes:</h2>
        <li>Bárbara Espinosa</li>
        <li>Jeimmy Tinoco</li>
        <li>Diego Torres</li>
      
      <InputExample onInputChange={handleInputChange} style={{ marginBottom: '10px' }} />
      
      
      <ClickExample onClick={handleClick} />
    </div>
  );
}

export default App;
