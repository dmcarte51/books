import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookCreate() {

    const { createBook } = useContext(BooksContext);

    // These are specifically for the forms used to create a book
    // Not for any sort of data persistence.
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');

    const handleChangeInTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleChangeInAuthor = (event) => {
        setAuthor(event.target.value);
    }

    const handleChangeInPages = (event) => {
        setPages(event.target.value);
    }


    const handleSubmit = (event) => { // create a new book
        event.preventDefault(); // the default is to refresh the page, this prevents that. 
        const createdBook = {title: title, author: author, pages: pages};
        createBook(createdBook);
        setTitle('');
        setAuthor('');
        setPages('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={handleChangeInTitle} />
                <label>Author</label>
                <input value={author} onChange={handleChangeInAuthor} />
                <label>Pages</label>
                <input value={pages} onChange={handleChangeInPages} />
                <button >Create!</button>
            </form>
        </div>
    )
}

export default BookCreate;