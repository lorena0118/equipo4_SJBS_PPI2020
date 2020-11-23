import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import  InicioSesion  from "../Components/InicioSesion";
import  MetodosAnticonceptivos  from "../Components/MetodosAnticonceptivos";
import  Foro  from "../Components/Foro";
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
import  Clamidia from "../Components/Clamidia";
import  Registro from "../Components/Registro";
import  MetodosBarrera from "../Components/MetodosBarrera";
import  IngresarForo from "../Components/IngresarForo";
import  MetodosNaturales from "../Components/MetodosNaturales";
import  MetodosQuirurjicos from "../Components/MetodosQuirurjicos";


export default function Ppicontainer() {
  return (
    <BrowserRouter>
      
      <Route path="/iniciosesion" component={InicioSesion} />
      <Route path="/foro" component={Foro} />
      <Route path="/metodosanticonceptivos" component={MetodosAnticonceptivos} />
      <Route path="/inicio" component={Temas} />
      <Route path="/micuenta" component={MiCuenta} />
      <Route path="/juegos" component={Juegos} />
      <Route path="/ets" component={Ets} />  
      <Route path="/crearforo" component={CrearForo} />  
      <Route path="/calendario" component={Calendario} />  
      <Route path="/configcuenta" component={ConfigCuenta} /> 
      <Route path="/juegoEnfermedades" component={JuegoEnfermedades} />
      <Route path="/embarazo" component={Embarazo} />
      <Route path="/metodosquimicos" component={MetodosQuimicos} />
      <Route path="/clamidia" component={Clamidia} />
      <Route path="/registro" component={Registro} />
      <Route path="/metodosbarrera" component={MetodosBarrera} />
      <Route path="/ingresarforo" component={IngresarForo} />
      <Route path="/metodosnaturales" component={MetodosNaturales} />
      <Route path="/metodosquirurjicos" component={MetodosQuirurjicos} />
      </BrowserRouter>
  );
}
