import React from "react";
import { connect } from "react-redux";

const Cart = ({ basketProps }) => {
  console.log("In Cart ", basketProps);
  let productInCart = [];
  basketProps.products.deals.find(item => {
    if (item.inCart) {
      productInCart.push(item);
    }
  });
  productInCart = productInCart.map((product, index) => {
    return (
      <React.Fragment key={index}>
        <div className="product">
          <ion-icon name="close-circle"></ion-icon>
          <img src={product.imageURL} alt={product.description} />
          <span className="sm-hide">{product.description}</span>
        </div>
        <div className="price sm-hide">${product.price}.00</div>
        <div className="quantity">
          <ion-icon
            className="decrease"
            name="arrow-back-circle-outline"
          ></ion-icon>
          <span>{product.count}</span>
          <ion-icon
            className="increase"
            name="arrow-forward-circle-outline"
          ></ion-icon>
        </div>
        <div className="total">${product.count * product.price}.00</div>
      </React.Fragment>
    );
  });
  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="procuct-title">Product</h5>
        <h5 className="price sm-hide">Price</h5>
        <h5 className="quantity">Quantity</h5>
        <h5 className="total">Total</h5>
      </div>
      <div className="products">{productInCart}</div>
      <div className="basketTotalContainer">
        <h4 className="basketTotalTitle">Basket Total</h4>
        <h4 className="basketTotal">{basketProps.cartCost}.00</h4>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  basketProps: state.basketState
});
export default connect(mapStateToProps)(Cart);
