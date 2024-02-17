import BookEdit from './BookEdit'
import { useState } from 'react';
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);

    const { deleteBookById } = useBooksContext();

    const handleClickDelete = () => {
        deleteBookById(book.id);
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
    <li>{book.pages}</li>
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