import { createContext, useState, useEffect } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {

    const [books, setBooks] = useState([]);
    
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
        console.log(response.data)
    }

    const createBook = async (book) => {
        const response = await axios.post('http://localhost:3001/books', book)
        console.log(response)
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    }

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    }

    const editBookById = async (updatedBook) => {
        const response = await axios.put(`http://localhost:3001/books/${updatedBook.id}`, updatedBook)
        console.log(response.data);
        const updatedBooks = books.map((book) => {
            if (updatedBook.id === book.id) {
                return response.data;
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    }

    console.log(books)

    return (<BooksContext.Provider value={ valueToShare }>
        {children}
    </BooksContext.Provider>
    )

};

export { Provider }

export default BooksContext;