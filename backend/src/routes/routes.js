const { Router } = require('express');
const router = Router();

const mysqlConnection = require('../db/db');


//Peticion get - lectura de datos
router.get('/login', (req,res) => {
  mysqlConnection.query('SELECT * FROM usuario', (err,rows,fields) => {
     if(!err)
     {
       res.json(rows);
     }else{
       console.log(err);
     }
  });
});

//
router.post('/crear_cuenta', (req, res) => {
    const {correo,nombre,contraseña} = req.body

    let cuenta = [correo,nombre,contraseña];

    let nuevaCuenta = `
INSERT INTO usuario(correo,nombre,contraseña)
VALUES (?,?,?);`

   mysqlConnection.query(nuevaCuenta,cuenta, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`usuario creado`})
   });
  });


//Peticion post - creación de datos

router.post('/crear_foro', (req, res) => {
    const {codigo,titulo,comentario,creador} = req.body

    let foro = [codigo,titulo,comentario,creador];

    let nuevoForo = `
INSERT INTO foro(codigo,titulo,comentario,creador)
VALUES (?,?,?,?);`

   mysqlConnection.query(nuevoForo,foro, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`foro creado`})
   });
  });

//Petición put -- Modificar datos



// Delete

router.delete('/eliminar_cuenta/:id', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM usuario WHERE correo =?`,[id],(err,rows,fields) => {
      if("err"){
        res.json({status: `usuario ha sido eliminado`})
      }else{
        console.log(err);
      }
    })
  })
module.exports=router;