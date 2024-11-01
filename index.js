const express = require('express');
const cors = require('cors');
const bunyan = require('bunyan');
const guiasRouter = require('./router/guiasRouter');
const usuariosRouter = require('./router/usuariosRouter');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const logger = bunyan.createLogger({name: 'Proyecto museo'});



app.use('/guias',guiasRouter);
app.use('/usuarios',usuariosRouter);



app.use((req,res)=>{
    res.status(404).json({mensaje: 'No se ha encontrado la ruta'})
})

app.use( (err,req,res,next)=>{
    res.status(500).json({mensaje: err})
} )


app.listen(3000, ()=>{

    logger.info('Servidor de express levantados')

})