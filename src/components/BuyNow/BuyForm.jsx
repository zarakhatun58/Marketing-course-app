import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Buy.css";

const BuyForm = ({ cart = [] }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [total, setTotal] = useState(0);
  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = cart.reduce(
        (accumulator, item) =>
          accumulator + parseFloat(item.price.replace("$", "")),
        0
      );
      setTotal(totalPrice);
    };

    calculateTotal();
  }, [cart]);

  const onSubmit = (data) => {
   
    console.log(data);
    alert("Form submitted successfully!");
  };
  return (
    <div className="row">
      <div className="col-75">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-50">
                <h3>Billing Address</h3>
                <label htmlFor="fname">
                  <i className="fa fa-user"></i> Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  {...register("firstname", { required: true })}
                  placeholder="John M. Doe"
                />
                {errors.firstname && <span>This field is required</span>}

                <label htmlFor="email">
                  <i className="fa fa-envelope"></i> Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  placeholder="john@example.com"
                />
                {errors.email && <span>This field is required</span>}

                <label htmlFor="adr">
                  <i className="fa fa-address-card-o"></i> Address
                </label>
                <input
                  type="text"
                  id="adr"
                  {...register("address", { required: true })}
                  placeholder="542 W. 15th Street"
                />
                {errors.address && <span>This field is required</span>}

                <label htmlFor="city">
                  <i className="fa fa-institution"></i> City
                </label>
                <input
                  type="text"
                  id="city"
                  {...register("city", { required: true })}
                  placeholder="New York"
                />
                {errors.city && <span>This field is required</span>}

                <div className="row">
                  <div className="col-50">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      {...register("state", { required: true })}
                      placeholder="NY"
                    />
                    {errors.state && <span>This field is required</span>}
                  </div>
                  <div className="col-50">
                    <label htmlFor="zip">Zip</label>
                    <input
                      type="text"
                      id="zip"
                      {...register("zip", { required: true })}
                      placeholder="10001"
                    />
                    {errors.zip && <span>This field is required</span>}
                  </div>
                </div>
              </div>

              <div className="col-50">
                <h3>Payment</h3>
                <label htmlFor="fname">Accepted Cards</label>
                <div className="icon-container">
                  <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                  <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                  <i
                    className="fa fa-cc-mastercard"
                    style={{ color: "red" }}
                  ></i>
                  <i
                    className="fa fa-cc-discover"
                    style={{ color: "orange" }}
                  ></i>
                </div>
                <label htmlFor="cname">Name on Card</label>
                <input
                  type="text"
                  id="cname"
                  {...register("cardname", { required: true })}
                  placeholder="John More Doe"
                />
                {errors.cardname && <span>This field is required</span>}

                <label htmlFor="ccnum">Credit card number</label>
                <input
                  type="text"
                  id="ccnum"
                  {...register("cardnumber", {
                    required: true,
                    pattern: /^\d{4}-\d{4}-\d{4}-\d{4}$/,
                  })}
                  placeholder="1111-2222-3333-4444"
                />
                {errors.cardnumber && (
                  <span>
                    This field is required and must be in the format
                    XXXX-XXXX-XXXX-XXXX
                  </span>
                )}

                <label htmlFor="expmonth">Exp Month</label>
                <input
                  type="text"
                  id="expmonth"
                  {...register("expmonth", { required: true })}
                  placeholder="September"
                />
                {errors.expmonth && <span>This field is required</span>}

                <div className="row">
                  <div className="col-50">
                    <label htmlFor="expyear">Exp Year</label>
                    <input
                      type="text"
                      id="expyear"
                      {...register("expyear", { required: true })}
                      placeholder="2018"
                    />
                    {errors.expyear && <span>This field is required</span>}
                  </div>
                  <div className="col-50">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      {...register("cvv", { required: true })}
                      placeholder="352"
                    />
                    {errors.cvv && <span>This field is required</span>}
                  </div>
                </div>
              </div>
            </div>
            <label>
              <input type="checkbox" {...register("sameadr")} /> Shipping
              address same as billing
            </label>
            <input type="submit" value="Continue to checkout" className="btn" />
          </form>
        </div>
      </div>
      {/* <div className="col-25">
        <div className="container">
          <h4>
            Cart{" "}
            <span className="price" style={{ color: "black" }}>
              <i className="fa fa-shopping-cart"></i> <b>{cart.length}</b>
            </span>
          </h4>
          {cart.map((item, index) => (
            <p key={index}>
              <a href="/">{item.title}</a>{" "}
              <span className="price">{item.price}</span>
            </p>
          ))}

          <hr />
          <p>
            Total{" "}
            <span className="price" style={{ color: "black" }}>
              <b>${total.toFixed(2)}</b>
            </span>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default BuyForm;
