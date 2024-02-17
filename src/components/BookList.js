import BookShow from "./BookShow";
import { useContext } from 'react';
import BooksContext from "../context/books";

function BookList( { bookList, onDelete, onEdit }) {
    const value = useContext(BooksContext);
    console.log(value)

    const renderedBooks = bookList.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    });

    return <div className="book-list">{renderedBooks}</div>
}

export default BookList;