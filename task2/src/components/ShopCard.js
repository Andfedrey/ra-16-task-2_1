const ShopCard = ({product}) => {
  const {name, price, color, img} = product;
  return ( 
    <div сlassName='card-wrapper'>
      <div className="card">
        <div className="card-text-content">
          <h1 className="card-title">{name}</h1>
          <h6 className="card-color">{color}</h6>
        </div>
          <div className="card-img-wrp">
            <img src={img} alt="#" className="card-img"></img>
          </div>
          <div className="card-bottom">
            <span className="card-price">{price}</span>
            <button className="card-button" type="button">add to cart</button>
          </div>
        </div>
    </div>
  );
}
export default ShopCard;