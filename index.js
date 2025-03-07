const axios = require('axios');

const API_URL = 'https://example.com/api/books'; // Reemplazar con la URL correcta

// 1. Obtener lista de libros
async function getAllBooks() {
    try {
        const response = await axios.get(`${API_URL}/all`);
        console.log(response.data);
    } catch (error) {
        console.error('Error obteniendo libros:', error);
    }
}

// 2. Obtener libro por ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${API_URL}/isbn/${isbn}`);
        console.log(response.data);
    } catch (error) {
        console.error('Error obteniendo libro por ISBN:', error);
    }
}

// 3. Obtener libros por autor
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${API_URL}/author/${author}`);
        console.log(response.data);
    } catch (error) {
        console.error('Error obteniendo libros por autor:', error);
    }
}

// 4. Obtener libros por título
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${API_URL}/title/${title}`);
        console.log(response.data);
    } catch (error) {
        console.error('Error obteniendo libros por título:', error);
    }
}

// Exportar funciones para su uso
module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle,
};

// Tarea 5: Obtener una reseña del libro
async function getBookReview(isbn) {
    try {
        const response = await axios.get(`${API_URL}/reviews/${isbn}`);
        return response.data;
    } catch (error) {
        console.error('Error obteniendo la reseña del libro:', error);
    }
}

// Tarea 6: Registrar un nuevo usuario
async function registerUser(userData) {
    try {
        const response = await axios.post(`${API_URL}/users/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error registrando usuario:', error);
    }
}

// Tarea 7: Iniciar sesión como usuario registrado
async function loginUser(credentials) {
    try {
        const response = await axios.post(`${API_URL}/users/login`, credentials);
        return response.data;
    } catch (error) {
        console.error('Error iniciando sesión:', error);
    }
}

// Implementación de métodos usando Async/Await y Promises
// Tarea 10: Obtener todos los libros con callback asíncrona
function fetchBooksAsync(callback) {
    axios.get(API_URL)
        .then(response => callback(null, response.data))
        .catch(error => callback(error, null));
}

// Tarea 11: Buscar por ISBN con Promises
function searchByISBN(isbn) {
    return axios.get(`${API_URL}/isbn/${isbn}`)
        .then(response => response.data)
        .catch(error => console.error('Error buscando por ISBN:', error));
}

// Tarea 12: Buscar por autor
async function searchByAuthor(author) {
    return await getBooksByAuthor(author);
}

// Tarea 13: Buscar por título
async function searchByTitle(title) {
    return await getBooksByTitle(title);
}

// Exportar funciones para uso externo
module.exports = {
    getBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle,
    getBookReview,
    registerUser,
    loginUser,
    fetchBooksAsync,
    searchByISBN,
    searchByAuthor,
    searchByTitle
};
