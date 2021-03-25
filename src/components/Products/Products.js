import React, {useState} from 'react';
import './Products.css';
import src from './product-pic.png'
import db from './db.json'

const Products = () => {
    
    const [productList, setproductList] = useState(db.products);
    const numberWithSpaces = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")

    return (
        <div className='products'>
            {productList.map(item =>
                <div key={item.id} className='product'>
                    <img src={src} className='product__pic'></img>
                    <div className='product__name'>{item.name}</div>
                    <div className='product__price-wrap'>
                        <span className='product__price-promo'>{numberWithSpaces(item.pricePromo)} , {item.valute}</span>
                        <span className='c'>{numberWithSpaces(item.priceOld)} , {item.valute}</span>
                    </div>
                    <button className="product__buy-btn">Кнопка</button>
                </div>
            )}
        </div>
    )
}

export default Products