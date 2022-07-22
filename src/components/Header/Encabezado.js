import React from 'react';
import imagen from '../../images/Portada/portada.png';

class Encabezado extends React.Component{
    render(){
        return (
            <div>
                <a href="/"><img class="img-fluid" src={imagen} alt=""/></a>
            </div> 
        );
    }
}

export default Encabezado;
