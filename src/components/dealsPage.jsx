import React, { Component } from "react";
import Deal from "./deal";
import { getDealsByZipCode, getDealById } from "../service/fakeDealsService";
import deals from "../data/fakeDeals";
class DealsPage extends Component {
  state = {
    orders: []
  };
  handleViewDeal = deal => {
    console.log("View Deals open", deal._id);
  };

  addToCart = id => {
    let tempProduct = [...deals];
    const index = tempProduct.indexOf(getDealById(id));
    const product = tempProduct[index];
    console.log(product);
    //this.setState({ orders: [...this.state.orders, product] });
  };
  render() {
    const zipCode = parseInt(this.props.match.params.zipcode);
    const deals = getDealsByZipCode(zipCode);
    return (
      <div className="p-2">
        <div className="d-flex align-content-around flex-wrap">
          {deals.map(deal => (
            <Deal key={deal._id} deal={deal} onViewDeal={this.handleViewDeal} />
          ))}
        </div>
      </div>
    );
  }
}

export default DealsPage;
