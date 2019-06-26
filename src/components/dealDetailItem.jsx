import React, { Component } from "react";

class DealDetailItem extends Component {
  render() {
    return (
      <div
        style={{
          width: "80em",
          height: "40em",
          padding: "40px",
          backgroundColor: "white",
          textAlign: "left",
          marginTop: "10%"
        }}
      >
        <h3>{this.props.dealdetailpage.description}</h3>
        <p>$ {this.props.dealdetailpage.price}</p>
        <div>
          <img
            style={{ float: "right" }}
            src={this.props.dealdetailpage.imageURL}
            alt="alt"
          />
        </div>
      </div>
    );
  }
}

export default DealDetailItem;
