
const fs = require('fs');
const argv = require('../config/yargs');
// fs = file system

const crearArchivo = async(base=5, listar= false, h=10) => {

    try {
        
        
        let salida, consola = '';

        for (let i = 1; i <= argv.h; i++) {

            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.blue}  ${i} ${'='.magenta} ${base*i}\n`;
        }

        if(listar)
        {
            console.log('================================='.bgMagenta);
            console.log(`         Tabla Del ${base}`       .blue);
            console.log('=================================='.bgRed);
            console.log(consola);
        }
        


        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        ///dato interesante
        return `Tabla-${base}.txt`;
        
    } catch (err) {

        throw err
    }
    

}

module.exports = {

    crearArchivo
}