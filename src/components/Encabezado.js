import React from 'react';
import imagen from '../images/portada.png';

class Encabezado extends React.Component{
    render(){
        return (
            <img width="100%" height="250px" src={imagen}/>
        );
    }
}

export default Encabezado;
