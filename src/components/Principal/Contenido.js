import React from "react";
import Presentacion from './Presentacion.js';
import Spotify from './Spotify.js';
import Facebook from './Facebook.js';

class Contenido extends React.Component{
    render(){
        return (
            <div>
                <div class="row">
                    <div class="col-sm d-flex">
                        <div class="card card-body flex-fillard">
                            <div class="card-body">
                                <Presentacion/>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm d-flex">
                        <div class="card card-body flex-fill">
                            <div class="card-body">
                                <Spotify/>                                
                            </div>
                        </div>
                    </div>
                    <div class="col-sm d-flex">
                        <div class="card card-body flex-fill">
                            <div class="card-body">
                                <Facebook/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contenido;
