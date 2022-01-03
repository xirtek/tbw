import React from "react";
import Facebook from './Facebook.js';
import Presentacion from './Presentacion.js';
import UltimoVideo from './UltimoVideo.js';

class Contenido extends React.Component{
    render(){
        return (
            <div>
                <div class="row">
                    <div class="col-sm d-flex">
                        <div class="card">
                            <div class="card-body">
                                <Presentacion/>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm d-flex">
                        <div class="card">
                            <div class="card-body">
                                <UltimoVideo/>                                
                            </div>
                        </div>
                    </div>
                    <div class="col-sm d-flex">
                        <div class="card">
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
