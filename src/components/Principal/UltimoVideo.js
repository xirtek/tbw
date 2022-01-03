import React from "react";

class UltimoVideo extends React.Component{
    
    render(){
        return (
            <div>
                <h1>Lo último de Youtube</h1>
                <br/>
                <iframe src='https://www.youtube.com/embed/zKDes5yfVQY'
                        width="100%" 
                        //height="100%"
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                />

            </div>
        );
    }

    obtenerVideo(){

    }

}

export default UltimoVideo;
