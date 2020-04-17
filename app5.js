/**********************/
//Instalando paquetes
/**********************/
//npm i yargs --save

/**********************/
//package-lock.json
/**********************/
//Se agregaron estas lineas indicando la version del yargs
// "dependencies": {
//     "yargs": "^15.3.1"

/**********************/
//package-lock.json
/**********************/
//Se creo este archivo. Este archivo es un registro de lo que se hizo para poder tener el yargs intaladao
//en la PC y todas la dependencias

/**********************/
//node_modules
/**********************/
//Se creo este archivo. Se encuentran todos los paquetes y plugins necesarios
//para que las dependecias del package.json funcionen
//No siempre se suelen tocar esos plugin
//Los modules de node por lo genereal no se envian a los servidores de produccion
//o los repositorios de git, basta con tener el package.json para que cuando se decargue
//otra persona solo descargue las dependencias necesarias colocando npm install

/**********************/
//Eliminando paquetes
/**********************/
//npm uninstall  nodemon