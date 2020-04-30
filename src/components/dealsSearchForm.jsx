import React, { Component } from "react";

class DealsSearchForm extends Component {
  zipCode = React.createRef();
  handleSubmit = e => {
    e.preventDefault();
    const zipCode = this.zipCode.current.value;
    this.props.history.push("/searchdeals/" + zipCode + "");
  };
  render() {
    return (
      <div className="searchForm">
        <div className="deals-text">
          <h1 style={{ fontFamily: "Gill Sans, sans-serif" }}>
            Search great deals near you
          </h1>
        </div>
        <form
          onSubmit={this.handleSubmit}
          className="form-inline md-form form-sm active-cyan-2 mt-6"
        >
          <input
            ref={this.zipCode}
            className="form-control form-control-lg mr-2 w-75"
            type="text"
            placeholder="Enter zip code.."
            aria-label="Search"
          />
          <button type="submit" className="btn btn-primary btn-lg ml-2">
            <i className="fa fa-search" /> Search
          </button>
        </form>
      </div>
    );
  }
}

export default DealsSearchForm;
