import React, { Component } from "react";
import Deal from "./deal";
import { getDealsByZipCode } from "../service/fakeDealsService";
class DealsPage extends Component {
  handleViewDeal = deal => {
    console.log("View Deals open", deal._id);
  };

  render() {
    const zipCode = parseInt(this.props.match.params.zipcode);
    console.log(zipCode);
    const deals = getDealsByZipCode(zipCode);
    console.log("gfgf", deals);
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
