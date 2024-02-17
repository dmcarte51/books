import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from 'axios';

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const respone = await axios.get('http://localhost:3001/books');
        setBooks(respone.data);
    }

    useEffect(() => {
        fetchBooks();
        console.log('Books fetched')
    }, []);

const createBook = async (book) => {
    const response = await axios.post('http://localhost:3001/books', book)
    console.log(response)
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
    // console.log('Book with id: ' + book.id + ' added');
    // console.log('Book with title: ' + book.title + ' added');
    // console.log('Book with author: ' + book.author + ' added');
    // console.log('Book with pages: ' + book.pages + ' added');
}

// A working but (probably) less preferred method
// const deleteBookById2 = (id) => {
//     const updatedBooks = books.map((book) => {
//         if (book.id !== id) {
//             return book;
//         }
//     });


//     setBooks(updatedBooks);
// }

const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
        return book.id !== id;
    });
    setBooks(updatedBooks);
}

const editBook = async (updatedBook) => {
    const response = await axios.put(`http://localhost:3001/books/${updatedBook.id}`, updatedBook)
    console.log(response.data);
    const updatedBooks = books.map((book) => {
        if (updatedBook.id === book.id) {
            return response.data;
        }
        return book;
    });
    setBooks(updatedBooks);
}


    return (
        <div>
            <div>Reading List:</div>
            <BookCreate onCreate={createBook}/>
            <BookList bookList={books} onDelete={deleteBookById} onEdit={editBook}/>
        </div>
    )
}

export default App;
