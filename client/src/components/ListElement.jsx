import { Link } from 'react-router-dom';

function ListElement({ item }) {
  return (
    <article>
      <header>
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '1.75rem',
            marginBottom: '0.4375rem',
          }}
        >
          <Link
            style={{ boxShadow: 'none' }}
            rel="bookmark"
            to={`/blogs/${item.id}`}
          >
            {item.title}
          </Link>
        </h3>
      </header>
      <p>{item.description}</p>
    </article>
  );
}

export default ListElement;
