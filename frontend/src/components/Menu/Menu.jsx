import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <Link to="/">Home</Link>{" | "}

      <Link to="/products">
        Produtos
      </Link>{" | "}

      <Link to="/categories">
        Categorias
      </Link>{" | "}

      <Link to="/login">
        Login
      </Link>
    </nav>
  );
}