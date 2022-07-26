import React from "react";
import HistoriaImagenes from './HistoriaImagenes.js';

class Historia extends React.Component{
    render(){
        const capitulo1 = 'https://www.ivoox.com/the-breves-weas-01-power-rangers-audios-mp3_rf_2379880_1.html';
        const tbwold = 'https://www.ivoox.com/podcast-podcast-the-breves-weas_sq_f182891_1.html';
        const tbwnew = 'https://www.ivoox.com/podcast-the-breves-w-e-a-s_sq_f1411481_1.html';
        const tbwytb = 'https://www.youtube.com/channel/UCiNxfEebhQJeUvX5H08xC3Q';
        const capituloFinal1raTempo = 'https://www.ivoox.com/the-breves-weas-114-miscelaneo-the-audios-mp3_rf_17275184_1.html';
        const cambioHost = 'https://www.ivoox.com/the-breves-w-e-a-s-2022-sin-sora-kasugano-audios-mp3_rf_80352747_1.html';

        return (
            <div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 d-flex">
                        <div class="card card-body flex-fill">
                            <div class="card-body">
                                <h1>Historia de The Breves W.E.A.S</h1>
                                <br/>
                                <p class="historia-justify">Comenzamos el 23 de Septiembre del 2013 subiendo en nuestra 1ra versión del podcast en ivoox, <a class="link-dark" target="_blank" rel="noreferrer" href={tbwold}>The Breves WEAS</a> el capítulo: <a class="link-dark" target="_blank" rel="noreferrer" href={capitulo1}>Power Rangers Parte 1</a>.</p>
                                <p class="historia-justify">Por ahí en el 2015, hicimos un par de streams en twitch (quedaron en el recuerdo).</p>
                                <p class="historia-justify">Por nuestra decisión, el 28 de febrero del 2017 publicamos nuestro último <a class="link-dark" target="_blank" rel="noreferrer" href={capituloFinal1raTempo}> capítulo #114</a> en ivoox.</p>
                                <p class="historia-justify">El 23 de Abril del 2017, volvimos con nuevos aires, ya que, cambiamos un poco el nombre del podcast a <a class="link-dark" target="_blank" rel="noreferrer" href={tbwnew}>The Breves W.E.A.S</a>.</p>
                                <p class="historia-justify">Tiempo después, pasamos de estar en Ivoox y Facebook a encontrarnos en más plataformas (Instagram, Youtube y Spotify).</p>
                                <p class="historia-justify">Iniciando 2022, hubo un <a class="link-dark" target="_blank" rel="noreferrer" href={cambioHost}>cambio de host</a>, por lo que LOLO es el que comienza a organizar el podcast. SORA nos acompaña en algunas ocasiones como invitado especial.</p>
                                <p class="historia-justify">Hay ocasiones en que hacemos contenido exclusivo para nuestro <a class="link-dark" target="_blank" rel="noreferrer" href={tbwytb}>canal de youtube</a>: Un Stream Loco y Traverse Weas.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 d-flex">
                        <div class="card card-body flex-fill">
                            <div class="card-body">
                                <HistoriaImagenes/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Historia;