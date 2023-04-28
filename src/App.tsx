import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [heading, setHeading] = useState();
  const [pitch, setPitch] = useState();
  const [roll, setRoll] = useState();

  useEffect(() => {
    function handleDeviceOrientation(event: any) {
      setHeading(event.alpha);
      setPitch(event.beta);
      setRoll(event.gamma);
    }

    window.addEventListener('deviceorientation', handleDeviceOrientation);
    return () => window.removeEventListener('deviceorientation', handleDeviceOrientation);
  }, []);

  return (
    <div className="App">
      <div>Heading: {heading}</div>
      <div>Pitch: {pitch}</div>
      <div>Roll: {roll}</div>
    </div>
  );
}

export default App;
