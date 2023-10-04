//``

//Usando desestructuración
import { env } from "../config.js";

//Concatenar con +
const uri = `${env.ssl+env.hostName}:${env.port}`;
//Para visualizar en la consola
//console.log(uri);

const config ={method:undefined, headers:{"Content-Type":"application/json"}};

//Método modularizado para obtener datos con GET
export const getAll = async()=>{
    config.method="GET";
    let res = await (await fetch(`${uri}/libro`,config)).json();
    return res;
}
//Obtener esos datos en la consola
console.log(await getAll());