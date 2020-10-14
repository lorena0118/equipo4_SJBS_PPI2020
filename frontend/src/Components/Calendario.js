import React from "react";
import {Link, withRouter} from "react-router-dom";
import Navigation from "./Navigation";
import BotonBack from "./BotonBack";

const Calendario = () => {
  return (
    <div>
      <Navigation/>
      <br/>
      <BotonBack/>
      <div class="container">
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col">
            <center> 
         
              <img
              src="https://i.pinimg.com/originals/db/d3/3a/dbd33ad0e6ace752ca4289e6daadf55a.png"
              width="200%"
              height="100%"
              /> 
            </center>
          </div>
          <div class="col">
       
          </div>
        </div>
      </div> 
      <div>
        <center>
        {" "}
        <br />
        <br />
        <br />
        <button type="button" class="btn btn-success">Nuevo</button>
        </center>
      </div>

      
     
    </div>
  );
};
export default withRouter(Calendario);
