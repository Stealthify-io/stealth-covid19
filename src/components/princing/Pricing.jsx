import React from "react";
import "./Pricing.css";

class Pricing extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="card-body">
          <p className="text-center-new py-2">Pricing</p>
          <p className="text-center-read py-2">If you wish to support what we are doing and help contribute to our running costs, please consider taking advantage of the benfits offered on our Premium plan. 
          <br/><br/>25% of all revenue will be donated to the Global Covid-19 Relief Fund.</p>
          <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Free</h5>
          <p className="card-text">Feature 1</p>
          <p className="card-text">Feature 2</p>
          <p className="card-text">Feature 3</p>
          <p className="card-text">Feature 4</p>
          <p className="card-text">Feature 5</p>
          <p className="card-text">Your current plan</p>
        </div>
      </div>
      <div className="card-2" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Premium</h5>
          <p className="card-text">Feature 1</p>
          <p className="card-text">Feature 2</p>
          <p className="card-text">Feature 3</p>
          <p className="card-text">Feature 4</p>
          <p className="card-text">Feature 5</p>
          <button className= "button ">Join Premium</button>
        </div>
      </div>
    
          </div>
      </React.Fragment>
    );
  }
}
export default Pricing;