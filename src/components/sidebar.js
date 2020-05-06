import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { logoutUser , isUserAuthenicated} from "../actions/auth";


import './sidebar.css'



class Sidebar extends React.Component {

componentWillMount(){
  this.props.isUserAuthenicated();
 
}

  render() {

  return (
        <aside className="sidebar">
            <div className="top-area">
              <header className="profile-head">
                <div className="image-holder">
                  <img src="images/user.png" alt="image description" />
                </div>
                <div className="text-holder">
                  <strong className="name">{this.props.user.first_name+" "+this.props.user.last_name}<a href="#" className="setting"><i className="far fa-cog" /></a></strong>
                  <a href="#" className="points"><span className="green">1252</span> Points <i className="far fa-chevron-right" /></a>
                </div>
              </header>
              <ul className="list-menu">
                <li><a href="/dashboard"><i className="fas fa-tachometer" />Dashboard</a></li>
                <li><a href="/map"><i className="fas fa-globe-americas" />News &amp; Map</a></li>
                <li><a href="#"><i className="fas fa-map-pin" />Risk Areas</a></li>
                <li><a href="#"><i className="fas fa-book-medical" />Health 2.0</a></li>
                <li><a href="#"><i className="fas fa-users" />Avoid Crowds</a></li>
              </ul>
              <div className="more-links">
                <span className="heading">coming soon</span>
                <ul className="list-menu disables">
                  <li><a href="#"><i className="far fa-globe-europe" />Global Map</a></li>
                </ul>
              </div>
            </div>
            <div className="bottom-area">
              <ul className="list-menu">
                <li><a href="#" className="active"><i className="fas fa-lock-alt" />Unlock more features</a></li>
                <li><a href="#"><i className="fas fa-question-circle" />How does it work?</a></li>
                <li><a href="#" onClick={this.props.logoutUser}><i className="far fa-sign-out-alt" />Sign Out</a></li>
              </ul>
              <strong className="logo"><a href="#"><img src="images/logo.svg" alt="image description" /></a></strong>
            </div>
          </aside>
  );
};
}

Sidebar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
     loading: state.auth.loading,
     error: state.auth.error,
     user:state.auth.user,
    token:state.auth.token,
    currentlocation:state.auth.currentlocation
});

export default connect(mapStateToProps, { logoutUser,isUserAuthenicated })(Sidebar);

