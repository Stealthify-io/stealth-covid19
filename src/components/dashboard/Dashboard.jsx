import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import "./Dashboard.css";
import { userWelcomeText,userLocation } from "../../actions/dashboard";

import SideBar from "../sidebar";
import MapImg from "./map.png";
import Location from "./location.png";
import Medicine from "./medicine.png";
import SocialDist from "./socialdist.png";



class Project extends React.Component {
  constructor(props){
    super(props);
    this.state={
      welcometext:"",
      user:{},
      currentLocation:''
    }
  }


  componentWillMount(){
    
    this.props.userWelcomeText();
    if (navigator.geolocation) {

     navigator.geolocation.getCurrentPosition(
      position => this.props.userLocation(position.coords.latitude,position.coords.longitude) && this.setState({lat:position.coords.latitude,lng:position.coords.longitude}), 
      err => console.log(err)
    );
  }
}

  componentWillReceiveProps(nextProps){    
    console.log(nextProps)
    this.setState({currentLocation:nextProps.currentLocation})
    this.setState({user:nextProps.user})
    this.setState({welcometext:nextProps.text})
  }
  render() {

    return (
      <React.Fragment>
         <div id="wrapper">
        <section className="two-cols">
          <a href="#" className="btn-arrow"><i className="far fa-chevron-left" /></a>
         <SideBar/>

          <section className="block-content">
            <div className="row">
<div className="text-title">
  <h6>
  {this.state.welcometext+" "+this.state.user.first_name+" "+this.state.user.last_name}
  </h6>
</div>
<div className="text-title">
<h6>
  {this.state.currentLocation}
  </h6>
</div>
</div>
          <div className="row row_dashboard ">
        <div className="card_wrapper1">
        <div className="col-sm-2.7 dash1  " style={{top: "185px"}}>
        <div className="card-body text-center">
        <img src ={Location} alt= "location" style = {{width : "100px"}}/>       
          <p className="card-text">Risk Areas</p>
          <p className="card-text">Get notified of high risk areas based on your current location.</p>          
        </div>
        </div>
      </div>     
      <div className="card_wrapper"> 
      <div className="col-sm-2.7 dash2 ">
        <div className="card-body text-center">
        <img src ={MapImg} alt= "mapimg" style = {{width : "100px"}}/>
          <p className="card-text">News & Map</p>
          <p className="card-text">Stay informed of critical updates through our interactive map and push notifications.</p>         
        </div>
      </div>
      </div>
       <div className="card_wrapper">
      <div className="col-sm-2.7 dash3 ">
        <div className="card-body text-center">
        <img src ={Medicine} alt= "medicine" style = {{width : "100px"}}/>
          <p className="card-text">Health 2.0</p>
          <p className="card-text">Customized health tips to prevent spread of germs and to keep your family safe.</p>         
        </div>
      </div>
      </div>
      <div className="card_wrapper">
      <div className="col-sm-2.7 dash4 ">
        <div className="card-body text-center">
        <img src ={SocialDist} alt= "socialdist" style = {{width : "100px"}}/>
          <p className="card-text">Avoid Crowds</p>
          <p className="card-text">Keep your distance with real time foot traffic of essential stores you need most.</p>     
        </div>
        </div>
        </div>
      </div> 
            {/* <div className="map-holder">
              <img src={"images/img-map.jpg"} alt="image description" />
            </div> */}

            {/* <div className="content-wrap">
              <div className="box">
                <ul className="list-details">
                  <li>
                    <strong className="title">CASES</strong>
                    <strong className="val">367,758</strong>
                  </li>
                  <li>
                    <strong className="title">deaths</strong>
                    <strong className="val">10,981</strong>
                  </li>
                  <li>
                    <strong className="title">Recovered cases</strong>
                    <strong className="val success">19,788</strong>
                  </li>
                </ul>
              </div>
            </div> */}
          </section>
        </section>
      </div>
      </React.Fragment>
    );
  }
}


Project.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  userWelcomeText:PropTypes.func.isRequired,
  userLocation:PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
     loading: state.dashboard.loading,
     user:state.auth.user,
     text:state.dashboard.text,
     currentLocation:state.dashboard.currentLocation,
});

export default connect(mapStateToProps, { userWelcomeText,userLocation })(Project);

