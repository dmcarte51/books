import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-context";

function App() {
    const { fetchBooks } = useBooksContext();

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div>
            <div>Reading List:</div>
            <BookCreate />
            <BookList />
        </div>
    )
}

export default App;
