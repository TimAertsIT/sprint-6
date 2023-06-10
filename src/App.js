import './App.css';
import { data } from './data'
import Escena from './components/escena/Escena'
import { StyledButton, StyledEscena, StyledTitle, StyledStart } from './styled'
import { useState } from 'react'

function App() {

  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const handleAnterior = () => {
    if (highlightedIndex > 0) {
      setHighlightedIndex(highlightedIndex - 1);
    }
  }

  const handleSeguent = ()  => {
    if (highlightedIndex < data.length -1) {
      setHighlightedIndex(highlightedIndex + 1); 
    }
  }

  const [started, setStarted] = useState(false);
  const handleStarted = () => {setStarted(true);}

  return (
    started ? 
    <div style={{backgroundImage: `url(${data[highlightedIndex].img})`, backgroundSize: 'cover', height: '600px'}}>
      <StyledButton onClick={handleAnterior}>Anterior</StyledButton>
      <StyledButton onClick={handleSeguent}>Següent</StyledButton>
      {data.map((txt) => (
        <StyledEscena className={data.indexOf(txt) === highlightedIndex ? "highlighted" : ""}>
        <Escena text={txt.txt} />
        </StyledEscena>
      ))}
      </div>
    : 
    <div>
      <StyledTitle>Welcome to this page</StyledTitle>
      <StyledEscena>You will read a beautiful story about a hero</StyledEscena>
      <StyledStart onClick={handleStarted}>Start</StyledStart>
    </div>
  );
}

export default App;
