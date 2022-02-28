import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">a book</Link>
        </li>
        <li>
          <Link to="/products/p2">coffee</Link>
        </li>
        <li>
          <Link to="/products/p3">cat</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
