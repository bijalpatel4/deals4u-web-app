import React, { Component } from "react";
import { Link } from "react-router-dom";

class Deal extends Component {
  render() {
    return (
      <div className="card m-2" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          style={{ width: 150, height: 120 }}
          src={this.props.deal.imageURL}
          alt="dealphoto"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.deal.description}</h5>
          <p className="card-text">${this.props.deal.price}</p>
        </div>
        <Link
          // onClick={() => this.props.onViewDeal(this.props.deal)}
          to={`/deals/${this.props.deal._id}`}
          className="btn btn-primary"
          style={{
            width: 180,
            margin: "0px auto 20px auto"
          }}
        >
          View Deal
        </Link>
      </div>
    );

    //  <table className="table">
    //   <tbody>
    //     {this.state.deals.map(deal => (
    //       <tr>
    //         <th>{deal.description}</th>
    //         <th>${deal.price}</th>
    //         <th>
    //           <button className="btn btn-danger m-2">View Deals</button>
    //         </th>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  }
}

export default Deal;
