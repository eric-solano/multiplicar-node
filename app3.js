//Primer opcion, puede ser con esta opcion pero hay que desestructurarlo
const multiplicar = require('./multiplicar/multiplicar3.js');
//console.log(multiplicar);

//Segunda opcion, con los {} indica que se desestructura
const {crearArchivo} = require('./multiplicar/multiplicar3.js');
//console.log(multiplicar);
 
let base = 'abd';

crearArchivo(base).then(archivo => {
    console.log(`Archivo creado: ${archivo}`);
}).catch(e => console.log(e));