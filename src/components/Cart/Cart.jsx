import React from "react";
import { connect } from "react-redux";
import { productQuantity } from "../../client/action/productQuantity";

const Cart = ({ basketProps, productQuantity }) => {
  let productInCart = [];
  basketProps.products.deals.find((item) => {
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
        <div className="price sm-hide">${product.price}</div>
        <div className="quantity">
          <ion-icon
            onClick={() => productQuantity("decrease", product._id)}
            className="decrease"
            name="arrow-back-circle-outline"
          ></ion-icon>
          <span>{product.count}</span>
          <ion-icon
            onClick={() => productQuantity("increase", product._id)}
            className="increase"
            name="arrow-forward-circle-outline"
          ></ion-icon>
        </div>
        <div className="total">${product.count * product.price}</div>
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
        <h4 className="basketTotal">{basketProps.cartCost}</h4>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});
export default connect(mapStateToProps, { productQuantity })(Cart);
