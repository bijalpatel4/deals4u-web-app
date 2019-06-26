import React, { Component } from "react";
import deals from "../data/fakeDeals";
import Deal from "./deal";

class DealsPage extends Component {
  state = {
    deals: deals
  };
  handleViewDeal = deal => {
    console.log("View Deals open", deal._id);
  };
  render() {
    return (
      <div className="p-2">
        <div className="d-flex align-content-around flex-wrap">
          {this.state.deals.map(deal => (
            <Deal key={deal._id} deal={deal} onViewDeal={this.handleViewDeal} />
          ))}
        </div>
      </div>
    );
  }
}

export default DealsPage;
