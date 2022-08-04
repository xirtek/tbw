import React from "react";

/*
  Plugin para visualizar Página de Facebook
  https://developers.facebook.com/docs/plugins/page-plugin/
*/

const iframe = '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fthebrevesweas&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>';
            
function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }

function Facebook() {
  return (
    <div className="Face">
      <h2>Nuestro Facebook</h2>
      <br/>
      <Iframe iframe={iframe}/>
    </div>
  );
}

export default Facebook;