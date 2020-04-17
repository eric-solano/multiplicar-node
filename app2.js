//requires
const fs = require('fs'); //este es de un proyecto propio de NODE
// const fs = require('express'); //NO es una libreria propia de NODE, pero es un paquete que se instala es de otras personas
// const fs = require('./'); //Son archivos que creamos en el proyecto

let base = 4;
let data = '';
for (let i = 0; i <= 10; i++) {
    data +=  `${base} * ${i} = ${base * i}\n`;
}

//Writefile(nombredelarchivo,contenido,callback(valida que el path no existe,
//escritura))
fs.writeFile(`tablas/tabla-${base}1.txt`,'Hello Node.js',(err) => {
    if(err)
    {
        throw err;
        console.log('The file has been saved');
    }
})

fs.writeFile(`tablas/tabla-${base}.txt`,data,(err) => {
    if(err)
    {
        throw err;
        console.log('The file has been saved');
    }
})
