import React from 'react';
import './App.css';
const withProducts = (products) => (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-details">
                <center><h2 className="product-name">{product.name}</h2>
                <p className="product-price">{product.price}</p></center>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };
};

const products = [
  { id: 1, name: 'Cappuccino', price: '$10', imageUrl: 'https://perfectdailygrind.com/wp-content/uploads/2020/03/Cappuccino-Cover.png' },
  { id: 2, name: 'Espresso', price: '$20', imageUrl: 'https://images.unsplash.com/photo-1508088405209-fbd63b6a4f50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGVzcHJlc3NvJTIwY29mZmVlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'  },
  { id: 3, name: 'Americano', price: '$30', imageUrl: 'https://www.homegrounds.co/wp-content/uploads/2019/08/americano-e1522545816957.jpg' },
];

const ProductList = withProducts(products)((props) => {
  return <div>{props.children}</div>;
});

export default ProductList;
