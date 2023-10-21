// En este archivo definimos las operacion CRUD para la entidad "usuarios" y las rutas para cada operación, en este caso solo tenemos una entidad "usuarios" pero en un proyecto real tendremos muchas entidades y cada una tendrá su archivo de rutas

const http = {};                          // Creando mi objeto http que contendra las funciones para hacer peticiones

http.get = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error en la peticion GET 7771: ', error)
    return null
  }
}


http.post = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.log('Error en la peticion POST 777: ', error)
    return null
  }
}


http.put = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.log('Error en la peticion PUT: ', error)
    return null
  }
}


http.delete = async (url) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    return response;
  } catch (error) {
    console.log('Error en la peticion DELETE: ', error)
    return null
  }
}

export default http ;