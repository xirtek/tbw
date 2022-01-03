import React from 'react';
import imagen from '../../images/Portada/portada.png';

class Encabezado extends React.Component{
    render(){
        return (
            <img width="100%" height="140px" src={imagen}/>
        );
    }
}

export default Encabezado;
