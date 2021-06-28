import React from "react";
import UltimosVideos from './UltimosVideos.js';

class Presentacion extends React.Component{
    render(){
        return (
            <div>
                <h1>Presentación</h1>
                <br/>
                <p>Bienvenidos al nuevo podcast de clase B, The Breves With Energy And Smile, o simplemente The Breves W.E.A.S.</p>
                <p>Podcast para hablar de todo, pero principalmente temas relacionados a videojuegos, cómics y animación. Conducido por SORA y LOLO.</p>
                <p>Subimos nuestro contenido en Youtube, Ivoox, Spotify y anunciamos los nuevos episodios, como también novedades, avisos en nuestra Fanpage e Instagram.</p>
                <br/>
                <UltimosVideos/>
            </div>
        );
    }
}

export default Presentacion;
