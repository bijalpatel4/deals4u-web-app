import React, { Component } from "react";
// import deals from "../data/fakeDeals";
import DealDetailItem from "./dealDetailItem";
import { getDealById } from "../service/fakeDealsService";
import deals from "../data/fakeDeals";

class DealDetail extends Component {
  state = {
    orders: []
  };
  // addToCart = id => {
  //   let tempProduct = [...deals];
  //   const index = tempProduct.indexOf(getDealById(id));
  //   const product = tempProduct[index];
  //   console.log(product);
  //   //this.setState({ orders: [...this.state.orders, product] });
  // };
  render() {
    const { match } = this.props;
    return (
      <div>
        <div>
          <div>
            <DealDetailItem
              dealdetailpage={getDealById(match.params.id)}
              // addToCart={this.addToCart}
            />
          </div>
          <div>
            <ul>
              {this.state.orders.map(order => (
                <li>
                  {order.description} , price : {order.price}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default DealDetail;
