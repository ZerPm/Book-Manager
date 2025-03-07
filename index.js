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

// Prueba de ejecución (descomentar para probar)
// getAllBooks();
// getBookByISBN('123456789');
// getBooksByAuthor('J.K. Rowling');
// getBooksByTitle('Harry Potter');
