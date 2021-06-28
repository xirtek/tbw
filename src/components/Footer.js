import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Footer extends React.Component{
    render(){
        return (
            <div>
                <nav class="nav ">
                    <a class="nav-link" href="#">Facebook</a>
                    <a class="nav-link" href="#">Instagram</a>
                    <a class="nav-link" href="#">Ivoox</a>
                    <a class="nav-link" href="#">Youtube</a>
                    <a class="nav-link" href="#">Spotify</a>
                </nav>
            </div>
        );
    }
}

export default Footer;