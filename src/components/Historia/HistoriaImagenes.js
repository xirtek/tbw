import React from "react";

//imágenes importadas para carrusel
import comic1 from '../../images/Variedad/comic1.jpg';
import figura1 from '../../images/Variedad/figura1.jpg';
import figura2 from '../../images/Variedad/figura2.jpg';
import juego1 from '../../images/Variedad/juego1.jpg';
import lolosora from '../../images/Variedad/lolosora.jpg';
import meme1 from '../../images/Variedad/meme1.jpg';
import meme2 from '../../images/Variedad/meme2.jpg';
import meme3 from '../../images/Variedad/meme3.jpg';
import spotify1 from '../../images/Variedad/spotify1.jpg';
import spotify2 from '../../images/Variedad/spotify2.jpg';

import './historia.css';



class HistoriaImagenes extends React.Component{
    render(){
        return(
            <div>
                <div id="carouselExampleSlidesOnly" class="carousel slide " data-bs-ride="carousel">
                    <div class="carousel-inner1">
                        <div class="carousel-item active" data-bs-interval="4000">
                            <img src={comic1} class="d-block w-100" alt=""/>
                        </div>
                        <div class="carousel-item" data-bs-interval="4000">
                            <img src={figura1} class="d-block w-100" alt=""/>
                        </div>
                        <div class="carousel-item" data-bs-interval="4000">
                            <img src={figura2} class="d-block w-100" alt=""/>
                        </div>
                        <div class="carousel-item" data-bs-interval="4000">
                            <img src={juego1} class="d-block w-100" alt=""/>
                        </div>
                        <div class="carousel-item" data-bs-interval="4000">
                            <img src={lolosora} class="d-block w-100" alt=""/>
                        </div>
                        <div class="carousel-item" data-bs-interval="4000">
                            <img src={meme1} class="d-block w-100" alt=""/>
                        </div>
                        <div class="carousel-item" data-bs-interval="4000">
                            <img src={meme2} class="d-block w-100" alt=""/>
                        </div>
                        <div class="carousel-item" data-bs-interval="4000">
                            <img src={meme3} class="d-block w-100" alt=""/>
                        </div>
                        <div class="carousel-item" data-bs-interval="4000">
                            <img src={spotify1} class="d-block w-100" alt=""/>
                        </div>
                        <div class="carousel-item" data-bs-interval="4000">
                            <img src={spotify2} class="d-block w-100" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HistoriaImagenes;