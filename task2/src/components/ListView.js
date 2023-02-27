import ShopItems from "./ShopItems";

const ListView = ({products}) => {
  return (
    <div className='list-view'>
      {products.map((product, i) => (
        <ShopItems product={product} key={`${product.name}-${i}`}></ShopItems>
      ))}
    </div>
  );
}
 
export default ListView;