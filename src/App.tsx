import logo from './assets/logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchTracks } from './lib/fetchTracks';
import { useQuery } from '@tanstack/react-query';
import { SavedTrack } from 'spotify-types';

const App = () => {
  const [trackIndex, setTrackIndex] = useState(0);

  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  };

  const { data: tracks, isLoading } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });

  const AlbumCover = () => {
    const src = tracks?.[trackIndex]?.track.album.images[0]?.url;
    return <img src={src} style={{ width: 400, height: 400 }} />;
  };

  useEffect;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Ceci est un test</h1>
      </header>
      <div className="App-images">
        {isLoading ? (
          <h1 className="App-title">LOADING....</h1>
        ) : (
          <>
            <div className="App-images">
              <AlbumCover />
              <p>{isLoading}</p>
              <p> Il y a {tracks?.length} musiques disponibles </p>
              <p>
                Le nom de la première musique est :{' '}
                {tracks?.[trackIndex]?.track?.name}
              </p>
              <audio
                src={tracks?.[trackIndex]?.track.preview_url}
                autoPlay
                controls
              />
              <button onClick={goToNextTrack}>Next track</button>
            </div>
            <div className="App-buttons"></div>
          </>
        )}
      </div>

      <div className="App-buttons"></div>
    </div>
  );
};

export default App;
