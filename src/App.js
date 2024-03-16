import './App.css';
import Booklist from './Components/Booklist';
import {books} from './Components/Books';

function App() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  }
  return (
    
    <section className='booklist'>
      {books.map((book, index) => {
        // using the destructuring method, i can pass all the object as props or i use the spread operator which will be preferred

        // const {img, title, author, id } = book
        return (
          <Booklist
            {...book}
            // author={author}
            // title={title}
            // img={img}
            key={book.id}
            index={index}
            getBook={getBook}
          />
        );
      })}
      
    </section>
  
  );
}

export default App;
