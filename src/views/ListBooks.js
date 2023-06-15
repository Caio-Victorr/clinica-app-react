import React, { useEffect, useState } from "react";
import NavBarItem from "./NavBarItem";
import { getAll, deleteBook } from "../services/LivroService";
import { useNavigate } from "react-router-dom";

export default function ListBooks() {

    let navigate = useNavigate()

    const [books, setBooks] = useState([])

    useEffect(() => {
        getAll().then(response => {
            setBooks(response.data)
            console.log(response.data)
        })
    }, [])

    function cadBook() {
        navigate("/createBook")
    }

    function remove(book){
        deleteBook(book)
    }

    return (
        <>
            <NavBarItem />

            <div className="container mt-5">
                <div className="mb-3">
                    <button type="button"
                        onClick={cadBook}
                        className="btn btn-secondary mb-3">Cadastrar</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>ISBN</th>
                            <th>Area</th>
                            <th>Biblioteca</th>
                            <th>Disponível</th>
                            <th scope="col" className="text-center">Ação</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {books.map(book => (
                            <tr>
                                <td>{book.name}</td>
                                <td>{book.isbn}</td>
                                <td>{book.area}</td>
                                <td>{book.library_id}</td>
                                <td>{book.isAvailable ? "Disponível" : "Indisponível"}</td>
                                <td>
                                    <div className="text-center">
                                        <button
                                            className="btn btn-secondary me-4"
                                            onClick={() => (window.location.href = 'cadastraLivro.html')}
                                        >
                                            Editar
                                        </button>
                                        <button className="btn btn-danger">Excluir</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </>


    )
}