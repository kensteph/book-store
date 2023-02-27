import { useSelector } from 'react-redux';
import Book from '../../Components/Book/Book';
import Form from '../../Components/Form/Form';

const BooksPage = () => {
  const books = useSelector((store) => store.books);

  if (books.length === 0) {
    return <h2>Library is empty....</h2>;
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '50px',
      }}
    >
      {books?.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <Form />
    </div>
  );
};

export default BooksPage;
