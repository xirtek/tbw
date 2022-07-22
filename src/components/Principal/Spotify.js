import React from "react";
import SpotifyPlayer from 'react-spotify-player';

/* 
    Package utilizado para visualizar Spotify
    https://www.npmjs.com/package/react-spotify-player
*/

const size = {
    width: '100%',
    height: 400,
  };
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

  function Spotify() {
    return (
      <div>
            <h1>Episodio Reciente</h1>
            <br/>
            <SpotifyPlayer
                uri="spotify:show:4JdaKvIBR3pOZjxwcyYh98"
                size={size}
                view={view}
                theme={theme}
            />
      </div>
    );
  }

export default Spotify;