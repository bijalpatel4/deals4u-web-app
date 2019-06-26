import React, { Component } from "react";
import deals from "../data/fakeDeals";
import DealDetailItem from "./dealDetailItem";

class DealDetail extends Component {
  findDeal(id) {
    const ds = deals.filter(deals => deals._id === id);
    return ds[0];
  }

  render() {
    //console.log(this.findDeal(this.props.match.params.id)[0]);
    const { match } = this.props;
    return (
      <div>
        <div>
          <div>
            <DealDetailItem dealdetailpage={this.findDeal(match.params.id)} />
          </div>
        </div>
      </div>
    );
  }
}

export default DealDetail;
