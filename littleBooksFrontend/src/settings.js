//en este archivo, se definen los endpoints.
//creando las variables que se utilizaran en los distintos componentes

export const API_BASE_URL = "http://localhost:5173/";

export const FIND_BOOKS ="https://pequenos-libros-publico.onrender.com/books/by-genre/"; // api, busqueda por nombre o autor
export const ORDER = API_BASE_URL + "" // api, envio de informacion de compra al backend

export const ENDPOINTS = {
    FIND_BOOKS,
    ORDER,
};