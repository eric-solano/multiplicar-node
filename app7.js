const argv = require('yargs')
                .command('listar','Imprime en consola la tabla de multiplicar',{
                    base: {
                        demand: true,
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    }
                })
                .command('crear','Genrar un archivo con la tabla de multiplicar',{
                    base: {
                        demand: true,
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    }
                })
                .help()
                .argv;



const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar7.js');
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
            console.log(`Archivo creado: ${archivo}`);
        }).catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(argv);

// console.log(argv.base);
// console.log(argv.limite);
//console.log(argv2);

