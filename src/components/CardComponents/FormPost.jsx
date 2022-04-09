import React, { useState } from "react";

import axios from "axios";

function FormPost() {
  const [data, setData] = useState({
    name: "",
    address: "",
    cost_for_one: "",
    min_cost: "",
    time_for_preparing: "",
    rating: "",
    votes: "",
    reviews_no: "",
    payment_methods: "",
    image: "",
    favourite: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    axios
      .post("https://hunger-restaurants.herokuapp.com/restaurants", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">

     <h1 style={{paddingTop:"2rem", textAlign:"center"}} >Form</h1>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              name="name"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter address"
              name="address"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="cost_for_one">Cost for one</label>
            <input
              type="text"
              className="form-control"
              id="cost_for_one"
              placeholder="Enter cost for one"
              name="cost_for_one"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="min_cost">Min cost</label>
            <input
              type="text"
              className="form-control"
              id="min_cost"
              placeholder="Enter min cost"
              name="min_cost"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="time_for_preparing">Time for preparing</label>
            <input
              type="text"
              className="form-control"
              id="time_for_preparing"
              placeholder="Enter time for preparing"
              name="time_for_preparing"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              className="form-control"
              id="rating"
              placeholder="Enter rating"
              name="rating"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="votes">Votes</label>
            <input
              type="text"
              className="form-control"
              id="votes"
              placeholder="Enter votes"
              name="votes"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="reviews_no">Reviews no</label>
            <input
              type="text"
              className="form-control"
              id="reviews_no"
              placeholder="Enter reviews no"
              name="reviews_no"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="payment_methods">Payment methods</label>
            <input
              type="text"
              className="form-control"
              id="payment_methods"
              placeholder="Enter payment methods"
              name="payment_methods"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              className="form-control"
              id="image"
              placeholder="Enter image"
              name="image"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="favourite">Favourite</label>
            <input
              type="text"
              className="form-control"
              id="favourite"
              placeholder="Enter favourite"
              name="favourite"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default FormPost;
