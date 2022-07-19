import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Footer extends React.Component{
    render(){
        return (
            <div>
                <nav class="nav justify-content-center">
                    <a class="nav-link" target="_blank" rel="noreferrer" href="https://www.facebook.com/thebrevesweas/">Facebook</a>
                    <a class="nav-link" target="_blank" rel="noreferrer" href="https://www.instagram.com/thebrevesweas/">Instagram</a>
                    <a class="nav-link" target="_blank" rel="noreferrer" href="https://www.ivoox.com/podcast-the-breves-w-e-a-s_sq_f1411481_1.html">Ivoox</a>
                    <a class="nav-link" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCiNxfEebhQJeUvX5H08xC3Q">Youtube</a>
                    <a class="nav-link" target="_blank" rel="noreferrer" href="https://open.spotify.com/show/4JdaKvIBR3pOZjxwcyYh98">Spotify</a>
                </nav>
            </div>
        );
    }
}

export default Footer;