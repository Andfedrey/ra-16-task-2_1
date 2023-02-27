import React from 'react'

export default function ShopItems({product}) {
  const {name, price, color, img} = product;
  return ( 
    <div сlassName='card-wrapper-list'>
      <div className="card-list">
          
          <img src={img} alt="#" className="card-img-list"></img>
            <h2 className="card-title-list table-content">{name}</h2>
            <h6 className="card-color-list table-content">{color}</h6>
            <span className="card-price-list table-content">{price}</span>
          <div className='btn-wrp-content table-content'>
            <button className="card-button-list table-content" type="button">add to cart</button>
          </div>
        </div>
    </div>
  );
}
