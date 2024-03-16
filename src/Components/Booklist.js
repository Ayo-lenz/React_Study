import "../App.css";

function Booklist(props) {
  
  const getSingleBook = () => {
    getBook(id);
    // lesson from this getBook is that we need to pass a reference as we cannot invoke a function right away then we can pass the reference or call the anonymous fuction wherever we want to invoke it
  }
  // React provides a special props called the 'children' and its used to render something thats between the component tags
  const { img, title, author, index, getBook, id } = props;
  return (
    // destructuring
    /*<article>
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>*/

    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{`#${index + 1}`}</span>
      <button onClick={getSingleBook}>Get Book</button>
    </article>
  );
}
export default Booklist;
