import { useState } from "react";

function BookCreate( { onCreate } ) {
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
    const createdBook = {id: Math.round(Math.random() * 1000), title: title, author: author, pages: pages};
    // setBook(createdBook); // This doesn't work because state updates in React are asynchronous
    // onCreate(book);
    onCreate(createdBook);
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