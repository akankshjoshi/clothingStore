import React from 'react';
import './productsection.css';

const products = [
  {
    id: 1,
    name: 'Women\'s T-Shirt',
    price: '$19.99',
    imageUrl: 'https://m.media-amazon.com/images/I/81omgrg1o5L._UX569_.jpg',
  },
  {
    id: 2,
    name: 'Men\'s Jeans',
    price: '$39.99',
    imageUrl: 'https://m.media-amazon.com/images/I/51jUNKK59SL._UX569_.jpg',
  },
  {
    id: 3,
    name: 'Kid\'s tshirt',
    price: '$44.99',
    imageUrl:'https://m.media-amazon.com/images/I/61kqhTCKtgL._SL1100_.jpg',
  },
  {
    id: 4,
    name:'Naruto tshirt',
    price :'$50.99',
    imageUrl:'https://m.media-amazon.com/images/I/614hrU9tw5L._UL1440_.jpg'
  },
  {
    id: 5,
    name:'Sassuke tshirt',
    price : '$70.99',
    imageUrl:'https://m.media-amazon.com/images/I/61C+VMoYrLL._UL1440_.jpg'
  },
  {
    id: 6,
    name:'Kakashi tshirt',
    price : '$60.99',
    imageUrl:'https://m.media-amazon.com/images/I/61obORGQN3L._UL1217_.jpg'
  },
  {
    id: 7,
    name:'sharigan clan tshirt',
    price : '$60.99',
    imageUrl:'https://m.media-amazon.com/images/I/41NolKPRFXL.jpg'
  },
  {
    id: 8,
    name:'third hokage',
    price:'$80.99',
    imageUrl:'https://m.media-amazon.com/images/I/71Iz76fStBL._UL1500_.jpg'
  },
  {
    id: 9,
    name:'tanjiro',
    price:'$80.99',
    imageUrl:'https://m.media-amazon.com/images/I/61WVMM8KBYL._UL1467_.jpg'
  },
  {
    id: 10,
    name:'itachi',
    price:'$80.99',
    imageUrl:'https://m.media-amazon.com/images/I/71D39X-81tL._UL1500_.jpg'
  }
]

function ProductSection() {
  return (
    <div className="product-section">
      <h2>Shop Our Collection</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button><a href='cart'>Add to Cart</a></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSection;