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
//console.log(await getOne(2));
//Método modularizado para obtener solo un dato con GET FIN




const validarExtructura = (data={})=>{
    if(data.constructor.name !== "Object" || Object.keys(data).length==0) return {status: 400, message: `Usuario envie los datos`};
    const {
        autorId=null, 
        categoriaId=null, 
        editorialId=null, 
        titulo=null, 
        fechaLanzamiento=null, 
        isbn=null, 
        numPaginacion=null, 
        estadoId=null
    } = data;
    let date = new Date(fechaLanzamiento);
    if(!(date && date.getFullYear()<=2040)) return {status: 400, message: `La fechaLanzamiento '${fechaLanzamiento}' no cumple con el formato`};
    
    if(typeof autorId !== 'number') return {status: 400, message: `El autorId '${autorId}' no cumple con el formato`};
    if(typeof categoriaId !== 'number') return {status: 400, message: `El categoriaId '${categoriaId}' no cumple con el formato`};
    if(typeof editorialId !== 'number') return {status: 400, message: `El editorialId '${editorialId}' no cumple con el formato`};
    if(typeof titulo !== 'string') return {status: 400, message: `El titulo '${titulo}' no cumple con el formato`};
    if(typeof isbn !== 'string') return {status: 400, message: `El isbn '${isbn}' no cumple con el formato`};
    if(typeof numPaginacion !== 'number') return {status: 400, message: `El numPaginacion '${numPaginacion}' no cumple con el formato`};
    if(typeof estadoId !== 'number') return {status: 400, message: `El estadoId '${estadoId}' no cumple con el formato`};
    return data;
}



//Método modularizado para enviar datos con POST INICIO
//Recibe un objeto, por defecto es vacio, en caso de que no, es el objeto que se envie
export const post = async(obj={})=>{
    //Se valida con la funcion
    obj = validarExtructura(obj);

    //SI entra a estatus significa que la validación fue exitosa
    if (obj.status) return obj;

    config.method = "POST";

    //Aunque no hay body en config, me imagino que por defecto se coloca
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}/libro`,config)).json();
    return res;
}
 console.log(await post(
    {"titulo": "El olor del miedo",
    "fecha": "2023-08-30",
    "autorId": 1,
    "categoriaId": 1,
    "editorialId": 1,
    "isbn": "380554",
    "numPaginacion": 552,
    "estadoId": 1,
    "id": 1
    }));
//Método modularizado para enviar datos con POST FINAL
