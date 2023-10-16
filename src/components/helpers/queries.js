const URL = import.meta.env.VITE_CAFECITO_URL;
//antes tenia process.env.react_app_api_cafecito;
//peticion Get para obtener todos los productos
//peticion POST crear un nuevo producto
//peticion PUT modificar un producto
// Peticion DELETE sirve para borrar un producto


export const consultarAPI = async()=>{
    
    try{
        const respuesta = await fetch(URL);
        const listaProductos = await respuesta.json()
        return listaProductos;
    }catch(error){
        console.log(error);
        return false;
    }
}

export const crearProductoAPI = async(producto)=>{
    
    try{
        const respuesta = await fetch(URL, {
            method:"POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        
        return respuesta;
    }catch(error){
        console.log(error);
        return false;
    }
}

export const borrarProductoPI = async(id)=>{
    
    try{
        const respuesta = await fetch(URL+"/"+id, {
            method:"DELETE"});
           return respuesta;
    }catch(error){
        console.log(error);
        return false;
    }
}

export const obtenerProductoAPI = async(id)=>{
    
    try{
        const respuesta = await fetch(URL+"/"+id);
        const producto={
            dato: await respuesta.json(),
            status: respuesta.status
        }
        return producto;
    }catch(error){
        console.log(error);
        return false;
    }
}