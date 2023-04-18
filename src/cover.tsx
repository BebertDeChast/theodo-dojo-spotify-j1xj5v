import { SavedTrack } from 'spotify-types';
const AlbumCover = (SavedTrack: track) => {
  const src = 'https://example.com/image.png'; // A changer ;)
  return <img src={src} style={{ width: 400, height: 400 }} />;
};

export default AlbumCover;
