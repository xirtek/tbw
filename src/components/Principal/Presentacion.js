import React from "react";
import './principal.css';

class Presentacion extends React.Component{
    render(){
        return (
            <div>
                <h2>¡Wena!</h2>
                <br/>
                <p class="principal-justify">Bienvenidos al  podcast más clase B del mundo: The Breves With Energy And Smile, o simplemente The Breves W.E.A.S.</p>
                <p class="principal-justify">Podcast para hablar de todo, pero principalmente temas relacionados a videojuegos, cómics y animación. Conducido por LOLO y nos acompaña en ciertas ocasiones como invitado SORA.</p>
                <p class="principal-justify">Subimos nuestro contenido en Youtube, Ivoox, Spotify y anunciamos los nuevos episodios, como también novedades, avisos en nuestra Fanpage e Instagram.</p>       
            </div>
        );
    }
}

export default Presentacion;
