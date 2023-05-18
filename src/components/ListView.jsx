import React from 'react'
import { products } from './Products'
import '..//App.css'

export default function ListView() {
    const ShopItem = products.map((element) => {
        return (
            <div className='List'>
                <li >
                    <img src={element.img} alt="img"></img>
                    <h2><p>{element.name}</p></h2>
                    <p>{element.color}</p>
                    <p>${element.price}</p>
                    <button>ADD TO CART</button>
                </li>
            </div>
        )
    })
    return (
        <div>{ShopItem}</div>
    )
}
