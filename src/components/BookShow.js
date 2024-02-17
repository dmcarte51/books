import BookEdit from './BookEdit'
import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);

    const { deleteById } = useContext(BooksContext);

    const handleClickDelete = () => {
        deleteById(book.id);
    }

    const handleClickEdit = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmitEdit = () => {
        setShowEdit(false)
    }
 
    // Display content
    let content = <ul>
    <li>{book.title}</li>
    <li>{book.author}</li>
</ul>

    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmitEdit} bookToEdit={book} />
    }

    return (
        <div>
            <img alt="book" src={`https://picsum.photos/seed/${book.id}}/200/300`} />
            <button onClick={handleClickDelete}>Delete</button>
            <button onClick={handleClickEdit}>Edit</button>
            {content}
        </div>
    )
}

export default BookShow;