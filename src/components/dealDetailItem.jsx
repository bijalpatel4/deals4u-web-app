import React from "react";
import { Link } from "react-router-dom";

const DealDetailItem = props => {
  // const [cart, setCart] = useContext(ProductContext);
  // const addToCart = () => {
  //   const item = { ...props.dealdetailpage };
  //   console.log(item);
  //   localStorage.setItem("item", JSON.stringify(item));
  //   //setCart(curr => [...curr, item]);
  // };

  return (
    <div className="container bg-light p-lg-5 m-md-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img
            src={props.dealdetailpage.imageURL}
            className="img-fluid"
            alt="alt"
          />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h1>{props.dealdetailpage.description}</h1>
          <h3 className="text-warning">
            <strong>
              Price: <span>$</span>
              {props.dealdetailpage.price}
            </strong>
          </h3>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            Some info about product:
          </p>
          <p className="text-muted lead">{props.dealdetailpage.info}</p>
          <div>
            <Link to={`/searchdeals/${props.dealdetailpage.zipCode}`}>
              <button className="btn btn-outline-primary btn-lg mr-3">
                Back to List
              </button>
            </Link>
            <button className="btn btn-outline-success btn-lg ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealDetailItem;
