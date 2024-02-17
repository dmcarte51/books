import BookEdit from './BookEdit'
import { useState } from 'react';

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleClickDelete = () => {
        onDelete(book.id);
    }

    const handleClickEdit = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmitEdit = (book) => {
        setShowEdit(false)
        onEdit(book);
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