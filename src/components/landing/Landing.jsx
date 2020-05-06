import React, { Component } from "react";
import "./Landing.css";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { isUserAuthenicated } from "../../actions/auth";

 class Landing extends React.Component {
  static displayName = Landing.name;


  render() {
    return (
      <div className="landing">
        <div className="landing-container">
          <div className="landing-jumbotron">
            <div className="landing-jumbotron-info">
              <h1>
                Help fight the spread of the Covid-19 Pandemic<em>.</em>
              </h1>
              <div className="landing-jumbotron-info-copy">
                Stealth.ify is a revolutionary web app that uses game-like
                features to <em>incentivize social distancing.</em> We alert our
                users through push notifications of where the spread will happen
                next, by using geospatial technology and predictive analytics to
                <em> track the spread of Covid-19.</em>
              </div>
              <div className="landing-button">
                <a href="./register">Register</a>
              </div>
            </div>
            <div className="landing-jumbotron-img">
              <img
                src={require("./iphone.jpg")}
                alt="cellphone app"
              ></img>
            </div>
          </div>
          <div className="landing-details">
            <div className="landing-details-card">
              <div className="landing-details-card-img">
                <img
                  src={require("./phone.jpg")}             
                  alt="person using phone"
                ></img>
              </div>
              <p>
                <em>Users are rewarded points</em> for putting their stealth
                skills to the test when staying away from high risk areas and
                crowded stores during peak hours.
              </p>
            </div>
            <div className="landing-details-card">
              <div className="landing-details-card-img">
                <img src={require("./gift.jpg")}
                  alt="person getting gift"
                ></img>
              </div>
              <p>
                Users can then use accumulated points to{" "}
                <em>redeem freebies and discounts</em> for virtual fitness
                classes, food delivery services, and so much more.
              </p>
            </div>
          </div>
          <div className="landing-get-started">
            <h3>
              Think you have what it takes to Stealth.ify?
              <br />
              Get started today!
            </h3>
            <div className="landing-button">
              <a href="./questions">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  isUserAuthenicated:PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
     loading: state.auth.loading,
     error: state.auth.error,
     isAuthenticated:state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { isUserAuthenicated })(Landing);