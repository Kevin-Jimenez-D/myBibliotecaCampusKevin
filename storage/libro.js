//``

//Usando desestructuración
import { env } from "../config.js";

//Concatenar con +
const uri = `${env.ssl+env.hostName}:${env.port}`;
//Para visualizar en la consola
//console.log(uri);

const config ={method:undefined, headers:{"Content-Type":"application/json"}};



//Método modularizado para obtener datos con GET INICIO
export const getAll = async()=>{
    config.method="GET";
    let res = await (await fetch(`${uri}/libro`,config)).json();
    return res;
}
//Obtener esos datos en la consola
//console.log(await getAll());
//Método modularizado para obtener datos con GET FIN



//Método modularizado para obtener solo un dato con GET INICIO
//Mirar que en la parte de la base de datos, debe estar id con el numero y con eso se accedera al dato en específico
export const getOne = async(id)=>{
    config.method="GET";
    let res = await (await fetch(`${uri}/libro/${id}`,config) ).json();
    return res;
}
console.log(await getOne(2));
//Método modularizado para obtener solo un dato con GET FIN