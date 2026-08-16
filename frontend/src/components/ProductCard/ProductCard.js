export default function ProductCard({
  nome,
  preco
}) {
  return (
    <div>
      <h3>{nome}</h3>
      <p>R$ {preco}</p>
    </div>
  );
}