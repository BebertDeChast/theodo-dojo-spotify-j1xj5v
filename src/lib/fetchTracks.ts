const apiToken: string =
  'BQBXALToc-3Csdtyq3F3Fp52Uoe7X8Ryhmr7hV3qjHDHOWYIsmVsrttdf_W6z3PPo-dayOf2z58fmcaggEj38mSNm2KOuX8a2XfTHeI_fnbF7YSs8XQA2TIW1NqzIUMXtOEOTXnVaple9KjdR0DgBZKfy6z_KnG_SnoQJIkUe4OgnarZJ6ZVCaRAG1xPIJx4kvpZmUo7lmx1_w4u0xOcklPPdloomqYF0JUunNpiWZa6m18mbagYLCuPxX4DWP8Ra8hsLW5ZeqRk6KF882RRQ4WZwQHlvVucN6Zi0ZQ3yWBwSJOkG82PMIgBkzap4yVeof22ucydiVGcy3FBvO9TQ7MmbMwbhFFiW4RdPauo0NbtPM8';

import { SavedTrack } from 'spotify-types';

export const fetchTracks = async (): Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
