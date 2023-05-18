import React from 'react'
import { products } from './Products'
import '..//App.css'

export default function CardsView() {
    const ShopCard = products.map((element) => {
        return (
            <div className='Card'>
                <li >
                    <h2><p>{element.name}</p></h2>
                    <p>{element.color}</p>
                    <img src={element.img} alt="img"></img>
                    <div className='price'>
                    <p>${element.price}</p>
                    <button>ADD TO CART</button>
                    </div>
                </li>
            </div>
        )
    })
    return (
        <div className='ShopCard'>{ShopCard}</div>
    )
}
