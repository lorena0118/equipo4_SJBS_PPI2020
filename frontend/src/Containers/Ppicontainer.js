import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import  InicioSesion  from "../Components/InicioSesion";
import  MetodosAnticonceptivos  from "../Components/MetodosAnticonceptivos";
import  Foro  from "../Components/Foro";
import  Navigation  from "../Components/Navigation";
import  Temas  from "../Components/Temas";
import  MiCuenta  from "../Components/MiCuenta";
import  Juegos  from "../Components/Juegos";
import  Ets  from "../Components/Ets";
import  CrearForo  from "../Components/CrearForo";
import  Calendario  from "../Components/Calendario";
import  ConfigCuenta  from "../Components/ConfigCuenta";
import  JuegoEnfermedades  from "../Components/JuegoEnfermedades";
import  Embarazo  from "../Components/Embarazo";
import  MetodosQuimicos  from "../Components/MetodosQuimicos";

export default function Ppicontainer() {
  return (
    <BrowserRouter>
      <Route path="/Navigation" component={Navigation} />
      <Route path="/InicioSesion" component={InicioSesion} />
      <Route path="/Foro" component={Foro} />
      <Route path="/MetodosAnticonceptivos" component={MetodosAnticonceptivos} />
      <Route path="/Inicio" component={Temas} />
      <Route path="/MiCuenta" component={MiCuenta} />
      <Route path="/Juegos" component={Juegos} />
      <Route path="/Ets" component={Ets} />  
      <Route path="/CrearForo" component={CrearForo} />  
      <Route path="/Calendario" component={Calendario} />  
      <Route path="/ConfigCuenta" component={ConfigCuenta} /> 
      <Route path="/JuegoEnfermedades" component={JuegoEnfermedades} />
      <Route path="/Embarazo" component={Embarazo} />
      <Route path="/MetodosQuimicos" component={MetodosQuimicos} />
      </BrowserRouter>
  );
}
