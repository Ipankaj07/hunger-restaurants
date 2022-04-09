import React, { useState, useEffect } from "react";
import "./card.css";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { RiSeparator } from "react-icons/ri";
import { FaRupeeSign } from "react-icons/fa";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { SiBitcoincash } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

import axios from "axios";

export default function CardComponent() {
  const [data, setData] = useState([]);
  const [fav, setFav] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [rating, setRating] = useState();
  const [paymentMethods, setPaymentMethods] = useState();
  const [costOfTwo, setCostOfTwo] = useState();

  const baseUrl = "https://hunger-restaurants.herokuapp.com/restaurants";

  const fetchdata = async (rating, paymentMethods, costOfTwo, page, limit) => {
    return await axios({
      method: "GET",
      url: baseUrl,
      params: {
        rating: rating,
        payment_methods: paymentMethods,
        cost_for_two: costOfTwo,
        // page: page,
        // limit: 10,
      },
    })
      .then((res) => {
        setData(res.data.restaurants);
        console.log(`dat`, res.data.restaurants);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchdata(rating, paymentMethods, costOfTwo, page, limit);
  }, [page, limit, rating, paymentMethods, costOfTwo]);

  const toggleFav = async (id) => {
    const response = await fetch(baseUrl + "/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favourite: fav,
      }),
    });
    const data = await response.json();
    console.log(data);
    return fetchdata();
  };

  return (
    <div className="div-container">
      {/* all filter options */}
      <div className="filter-container">
        <div className="div-filter">
          <div className="d-flex fd-1">
            <div className="f-title">Filters</div>
            <div
              className="btn btn-primary"
              onClick={() => {
                setPage(1);
                setRating();
                setPaymentMethods();
                setCostOfTwo();
              }}
            >
              Clear all
            </div>
          </div>

          {/* --- */}

          <div className="rating-filter-div">
            <div>Rating</div>
            <div className="r-inp-div">
              <input
                type="checkbox"
                id="rating-1"
                onChange={() => {
                  if (rating === 1) {
                    setRating();
                  } else {
                    setRating(1);
                  }
                }}
              />
              <label htmlFor="rating-1">
                <span className="checkbox-txt">1</span>
                <span className="checkbox-txt">
                  {" "}
                  <AiFillStar />{" "}
                </span>
                <span className="checkbox-txt"> & above</span>
              </label>
            </div>
            <div className="r-inp-div">
              <input
                type="checkbox"
                id="rating-2"
                onChange={() => {
                  if (rating === 2) {
                    setRating();
                  } else {
                    setRating(2);
                  }
                }}
              />
              <label htmlFor="rating-2">
                <span className="checkbox-txt">2</span>
                <span className="checkbox-txt">
                  {" "}
                  <AiFillStar />{" "}
                </span>
                <span className="checkbox-txt"> & above</span>
              </label>
            </div>
            <div className="r-inp-div">
              <input
                type="checkbox"
                id="rating-3"
                onChange={() => {
                  if (rating === 3) {
                    setRating();
                  } else {
                    setRating(3);
                  }
                }}
              />
              <label htmlFor="rating-3">
                <span className="checkbox-txt">3</span>
                <span className="checkbox-txt">
                  {" "}
                  <AiFillStar />{" "}
                </span>
                <span className="checkbox-txt"> & above</span>
              </label>
            </div>
            <div className="r-inp-div">
              <input
                type="checkbox"
                id="rating-4"
                onChange={() => {
                  if (rating === 4) {
                    setRating();
                  } else {
                    setRating(4);
                  }
                }}
              />
              <label htmlFor="rating-4">
                <span className="checkbox-txt">4</span>
                <span className="checkbox-txt">
                  {" "}
                  <AiFillStar />{" "}
                </span>
                <span className="checkbox-txt"> & above</span>
              </label>
            </div>
          </div>
          {/* --- */}
          <div className="payment-filter-div">
            <div>Payment Methods</div>
            <div className="r-inp-div">
              <input
                type="checkbox"
                id="cash"
                onChange={() => {
                  if (paymentMethods === "cash" || paymentMethods === "all") {
                    setPaymentMethods();
                  } else {
                    setPaymentMethods("cash") && setPaymentMethods("all");
                  }
                }}
              />
              <label htmlFor="cash">
                <span className="checkbox-txt">
                  Cash <BsCashCoin className="p-logo" />{" "}
                </span>
              </label>
            </div>

            <div className="r-inp-div">
              <input
                type="checkbox"
                id="card"
                onChange={() => {
                  if (paymentMethods === "card") {
                    setPaymentMethods();
                  } else {
                    setPaymentMethods("card");
                  }
                }}
              />
              <label htmlFor="card">
                <span className="checkbox-txt">
                  Card <BsFillCreditCard2BackFill className="p-logo" />
                </span>
              </label>
            </div>

            <div className="r-inp-div">
              <input
                type="checkbox"
                id="online"
                onChange={() => {
                  if (paymentMethods === "online") {
                    setPaymentMethods();
                  } else {
                    setPaymentMethods("online");
                  }
                }}
              />
              <label htmlFor="online">
                <span className="checkbox-txt">
                  Online <SiBitcoincash className="p-logo" />
                </span>
              </label>
            </div>
          </div>

          {/* --- */}

          <div className="cost-filter-div">
            <div>
              Cost of Two <BsFillPeopleFill />{" "}
            </div>
            <div className="r-inp-text">
              <input
                type="number"
                id="cost"
                onChange={(e) => {
                  setCostOfTwo(e.target.value);
                }}
                placeholder="Enter Price"
              />
            </div>
          </div>

          {/* --- */}
        </div>
      </div>
      <div className="main">
        {data.map((item) => {
          return (
            <div className="card" key={item._id}>
              <div className="d-flex c-1">
                <div
                  className="rd1"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                ></div>

                <div className="r-d2">
                  <div className="r-title">{item.name}</div>
                  <div className="r-address">{item.address}</div>
                  <div className="r-costFO">
                    cost <FaRupeeSign className="rup-logo" />{" "}
                    {item.cost_for_one} for one
                  </div>
                  <div className="d-flex">
                    <div className="r-costM">
                      Min <FaRupeeSign className="rup-logo" /> {item.min_cost}{" "}
                    </div>
                    <div className="separator">
                      {" "}
                      <RiSeparator />{" "}
                    </div>
                    <div className="r-time">
                      Up to {item.time_for_preparing} min
                    </div>
                  </div>

                  <div className="r-payment">
                    {item.payment_methods.includes("all") ? (
                      <div className="d-flex">
                        <div className="r-cash">
                          <BsCashCoin />
                        </div>
                        <div className="separator"> | </div>
                        <div className="r-card">
                          <BsFillCreditCard2BackFill />
                        </div>
                        <div className="separator"> | </div>
                        <div className="r-online">
                          <SiBitcoincash />
                        </div>
                      </div>
                    ) : item.payment_methods.includes("cash") &&
                      item.payment_methods.includes("card") &&
                      item.payment_methods.includes("online") ? (
                      <div className="d-flex">
                        <div className="r-cash">
                          <BsCashCoin />
                        </div>
                        <div className="separator"> | </div>
                        <div className="r-card">
                          <BsFillCreditCard2BackFill />
                        </div>
                        <div className="separator"> | </div>
                        <div className="r-online">
                          <SiBitcoincash />
                        </div>
                      </div>
                    ) : item.payment_methods.includes("cash") &&
                      item.payment_methods.includes("online") ? (
                      <div className="d-flex">
                        <div className="r-cash">
                          <BsCashCoin />
                        </div>
                        <div className="separator"> | </div>
                        <div className="r-card">
                          <SiBitcoincash />
                        </div>
                      </div>
                    ) : item.payment_methods.includes("cash") &&
                      item.payment_methods.includes("card") ? (
                      <div className="d-flex">
                        <div className="r-cash">
                          <BsCashCoin />
                        </div>
                        <div className="separator"> | </div>
                        <div className="r-card">
                          <BsFillCreditCard2BackFill />
                        </div>
                      </div>
                    ) : item.payment_methods.includes("online") &&
                      item.payment_methods.includes("card") ? (
                      <div className="d-flex">
                        <div className="r-cash">
                          <SiBitcoincash />
                        </div>
                        <div className="separator"> | </div>
                        <div className="r-card">
                          <BsFillCreditCard2BackFill />
                        </div>
                      </div>
                    ) : item.payment_methods.includes("cash") ? (
                      <div className="d-flex">
                        <div className="r-cash">
                          <BsCashCoin />
                        </div>
                      </div>
                    ) : item.payment_methods.includes("card") ? (
                      <div className="d-flex">
                        <div className="r-card">
                          <BsFillCreditCard2BackFill />
                        </div>
                      </div>
                    ) : item.payment_methods.includes("online") ? (
                      <div className="d-flex">
                        <div className="r-online">
                          <SiBitcoincash />
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="r-d3">
                  <div className="r-rate">{item.rating}</div>
                  <div className="r-vote">{item.votes}votes</div>
                  <div className="r-review">{item.reviews_no} reviews</div>
                </div>
              </div>

              <div className="d-flex c-2">
                <div
                  className=""
                  onClick={() => {
                    setFav(!fav);
                    toggleFav(item._id);
                  }}
                >
                  {item.favourite ? (
                    <BsBookmarkHeartFill className="save color-save" />
                  ) : (
                    <BsBookmarkHeartFill className="save" />
                  )}
                </div>

                <div className="r-btn">
                  Order Online <MdOutlineDoubleArrow className="arrow_logo" />{" "}
                </div>
              </div>
            </div>
          );
        })}

        <div className="d-flex">
          <button
            className="btn btn-primary  m-3"
            onClick={() => {
              setPage(page - 1);
            }}
            disabled={page === 1}
          >
            previous
          </button>

          <button
            className="btn btn-primary  m-3"
            onClick={() => {
              setPage(page + 1);
            }}
            // disabled={page === Math.ceil(data.length / limit)}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
