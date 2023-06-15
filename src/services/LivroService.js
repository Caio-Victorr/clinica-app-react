import axios from "axios";

const baseUrl = 'http://localhost:8080/'

export const getAll = () => {
    return axios.get(baseUrl + "librarian/allBooks")
}

export const saveBook = (book) => {
    return axios.post(baseUrl + "librarian/book", book)
}

export const deleteBook = (book) => {
    return axios.delete(baseUrl + "librarian/book", book)
}