//requires
const fs = require('fs'); //este es de un proyecto propio de NODE
var colors = require('colors');

let listarTabla = (base, limite=10) => {
    return new Promise((resolve,reject) => {
        if(!Number(base)){
            reject(`El valor introducido ${base}, no es un numero`)
            return;
        }
        
        let data = '';
        for (let i = 0; i <= limite; i++) {
            data +=  `${base} * ${i} = ${base * i}\n`;
        }
        console.log('==========================='.green);
        console.log(`=====La tabla ${base}======`.green);
        console.log('==========================='.green);
        resolve(data)
    });
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve,reject) => {
        
        if(!Number(base)){
            reject(`El valor introducido ${base}, no es un numero`)
            return;
        }
        
        let data = '';
        for (let i = 0; i <= limite; i++) {
            data +=  `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`,data,(err) => {
            if(err)
            {
                reject(err);                
            }
            else{
                resolve(`tabla-${base}-al-${limite}.txt`)
            }
        })
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
