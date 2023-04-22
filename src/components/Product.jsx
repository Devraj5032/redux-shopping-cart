import React from "react";
import { addToCart } from "../redux/actions/cart";
import { connect } from "react-redux";

const Product = ({product , addToCart}) => {

  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
         {product.description}
        </p>
        <button className="btn btn-primary" onClick={() => {addToCart(product)}}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  addToCart: (prod) => (dispatch(addToCart(prod)))
})

export default connect(mapStateToProps , mapDispatchToProps) (Product);
