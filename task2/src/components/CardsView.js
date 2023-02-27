import ShopCard from "./ShopCard";

const CardsView = ({products}) => {
  return ( 
    <div className='card-view'>
      {products.map((product, i) => (
        <ShopCard product={product} key={`${product.name}-${i}`}></ShopCard>
      ))}
    </div>
  );
}

export default CardsView;