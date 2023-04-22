import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { increaseQuantity } from "../redux/actions/cart";

const Cart = ({ cart , increaseQuantity}) => {

  const [newCart , setNewCart] = useState([])

  useEffect(() => {
    setNewCart(cart)
  } , [cart])

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        style={{
          width: "60px",
          backgroundColor: "black",
          color: "white",
          padding: "17px",
          margin: "10px 10px",
          borderRadius: "50px",
          cursor: "pointer",
        }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Cart
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="card">
                  
                  {newCart?.map((prod , index) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      key={prod.id}
                    >
                      <img
                        src={prod.image}
                        className="card-img-top"
                        alt="..."
                        style={{ width: "5rem", height: "5rem" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{prod.title.slice(0,25)}</h5>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button type="button" className="btn btn-primary" onClick={() => {increaseQuantity(index)}}>
                            +
                          </button>
                          <button className="btn btn-primary">{prod.quantity}</button>
                          <button type="button" className="btn btn-primary" >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartReducer,
});

const mapDispatchToProps = (dispatch) => ({
  increaseQuantity: (index) => (dispatch(increaseQuantity(index)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
