const argv =  require('./config/yargs8').argv;
var colors = require('colors/safe');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar9.js');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite).then(lista => {
            console.log(lista);
        }).catch(e => console.log(e));
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base,argv.limite).then(archivo => {
            console.log(`Archivo creado:`, colors.green(archivo));
        }).catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(argv);

// console.log(argv.base);
// console.log(argv.limite);
//console.log(argv2);

