const mysql = require('mysql');
const bunyan = require('bunyan');

const logger = bunyan.createLogger({name:'Configuracion BD'})

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'museo'
})


try {
    
    conexion.connect((err)=>{

        if (err) {
            throw err;
        }

        logger.info('Conextado a la base de datos satisfactoriamente')

    })


} catch (error) {
 
    logger.error('Error en la conexion: '+error)

}

module.exports = conexion;