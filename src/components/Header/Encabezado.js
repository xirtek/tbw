import React from 'react';
import imagen from '../../images/Portada/portada.png';

class Encabezado extends React.Component{
    render(){
        return (
            <img class="img-fluid" src={imagen}/>
        );
    }
}

export default Encabezado;
