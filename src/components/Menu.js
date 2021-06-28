import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Menu extends React.Component{
    render(){
        return (
            <div>
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Historia</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Podcast</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Streams</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;
