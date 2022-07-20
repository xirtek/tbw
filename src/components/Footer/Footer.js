import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BsFacebook, BsInstagram, BsYoutube, BsSpotify } from "react-icons/bs";
import { MdPodcasts } from "react-icons/md";

/*
    Íconos
    https://react-icons.github.io/react-icons
*/

class Footer extends React.Component{
    render(){
        return (
            <div>
                <nav class="nav justify-content-center">
                    <a class="nav-link" target="_blank" rel="noreferrer" href="https://www.facebook.com/thebrevesweas/"><BsFacebook size="2em" color="black"/></a>
                    <a class="nav-link" target="_blank" rel="noreferrer" href="https://www.instagram.com/thebrevesweas/"><BsInstagram size="2em" color="black"/></a>
                    <a class="nav-link" target="_blank" rel="noreferrer" href="https://www.ivoox.com/podcast-the-breves-w-e-a-s_sq_f1411481_1.html"><MdPodcasts size="2em" color="black"/></a>
                    <a class="nav-link" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCiNxfEebhQJeUvX5H08xC3Q"><BsYoutube size="2em" color="black"/></a>
                    <a class="nav-link" target="_blank" rel="noreferrer" href="https://open.spotify.com/show/4JdaKvIBR3pOZjxwcyYh98"><BsSpotify size="2em" color="black"/></a>
                </nav>
            </div>
        );
    }
}

export default Footer;