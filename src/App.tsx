import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { fetchTracks } from './lib/fetchTracks';
import { useQuery } from '@tanstack/react-query';

const App = () => {
  const [trackIndex, setTrackIndex] = useState(0);

  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  };

  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Ceci est un test</h1>
      </header>
      <div className="App-images">
        <p>{isLoading}</p>
        <p>{tracks?.[trackIndex]?.track.name}</p>
      </div>

      <div className="App-buttons"></div>
      <audio src={tracks?.[trackIndex]?.track.preview_url} autoPlay controls />
      <button onClick={goToNextTrack}>Next track</button>
    </div>
  );
};

export default App;
