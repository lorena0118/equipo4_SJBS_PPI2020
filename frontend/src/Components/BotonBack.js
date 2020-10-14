import React from "react";
import {Link, withRouter} from "react-router-dom";


const BotonBack = () => {
  return (
    <div className="container">
    <button 
          onClick={() => history.goBack("/")}
        >
          <img src="./img/flecha.png" width="15" height="auto"/>
    </button>
    </div>
  )
}
export default withRouter(BotonBack);
