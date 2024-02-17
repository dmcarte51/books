import { useState } from "react";

function BookEdit({ onSubmit, bookToEdit }) {
    const [title, setTitle] = useState(bookToEdit.title);
    const [author, setAuthor] = useState(bookToEdit.author);
    const [pages, setPages] = useState(bookToEdit.pages);

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
        const updatedBook = {...bookToEdit, title: title, author: author, pages: pages};
        // setBook(createdBook); // This doesn't work because state updates in React are asynchronous
        // onCreate(book);
        onSubmit(updatedBook);
        setTitle('');
        setAuthor('');
        setPages('');
    }
    return (
        <div>
            <div>EDIT:</div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={handleChangeInTitle} />
                <label>Author</label>
                <input value={author} onChange={handleChangeInAuthor} />
                <label>Pages</label>
                <input value={pages} onChange={handleChangeInPages} />
                <button >Save!</button>
            </form>
        </div>
    )
}

export default BookEdit