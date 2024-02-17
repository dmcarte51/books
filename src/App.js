import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

const createBook = (book) => {
    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
    console.log('Book with id: ' + book.id + ' added');
    console.log('Book with title: ' + book.title + ' added');
    console.log('Book with author: ' + book.author + ' added');
    console.log('Book with pages: ' + book.pages + ' added');
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

const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
        return book.id !== id;
    });
    setBooks(updatedBooks);
}

const editBook = (newBook) => {
    const updatedBooks = books.map((book) => {
        if (newBook.id === book.id) {
            return newBook;
        }
        return book;
    });
    setBooks(updatedBooks);
}


    return (
        <div>
            <BookCreate onCreate={createBook}/>
            <BookList bookList={books} onDelete={deleteBookById} onEdit={editBook}/>
        </div>
    )
}

export default App;
