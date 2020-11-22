const { Router } = require("express");
const router = Router();

const mysqlConnection = require("../db/db");

//Peticion get - lectura de datos
router.get("/usuarios", (req, res) => {
  mysqlConnection.query("SELECT * FROM usuario", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

//
router.post("/usuarios", (req, res) => {
  const { correo, nombre, contraseña } = req.body;

  let cuenta = [correo, nombre, contraseña];

  let nuevaCuenta = `INSERT INTO usuario(correo,nombre,contraseña)
    VALUES (?,?,?);`;

  mysqlConnection.query(nuevaCuenta, cuenta, (err, results, fields) => {
    if (err) {
      console.error(err.message);
    }
    return res.json({ message: 'usuario creado', success: true, status: 201 }).status(201);
  });
});

//Peticion post - creación de datos

router.post("/foro", (req, res) => {
  const { codigo, titulo, comentario, creador } = req.body;

  let foro = [codigo, titulo, comentario, creador];

  let nuevoForo = `
INSERT INTO foro(codigo,titulo,comentario,creador)
VALUES (?,?,?,?);`;

  mysqlConnection.query(nuevoForo, foro, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `foro creado` });
  });
});

//Petición put -- Modificar datos
router.put('/Modificar/:id', (req,res) => {
  const { nombre } = req.body
  const { id } = req.params 

mysqlConnection.query(`UPDATE usuario SET nombre = ?,  WHERE ID_TIPO = ?`,[nombre,id], (err, rows,fields) => {
   if(!err){
    res.json({status: `Tipo usuario ha sido actualizado con éxito`});
   }else{
     console.log(err);
   }
});
});



// Delete

router.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `DELETE FROM usuario WHERE correo =?`,
    [id],
    (err, rows, fields) => {
      if ("err") {
        res.json({ status: `usuario ha sido eliminado` });
      } else {
        console.log(err);
      }
    }
  );
});
module.exports = router;
