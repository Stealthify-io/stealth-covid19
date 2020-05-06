import React, { Component } from 'react'; 
import {Map,Marker ,Circle,InfoWindow, GoogleApiWrapper,Listing} from 'google-maps-react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getDistance } from "../../actions/dashboard";
import SideBar from "../sidebar";
 
class MapContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lat: '',
      lng:'',
      distance:''
    }
  }

  componentWillMount(){
    this.setPosition();


  }
  setPosition =  () => {
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(
       position => this.props.getDistance(position.coords.latitude,position.coords.longitude) && this.setState({lat:position.coords.latitude,lng:position.coords.longitude}), 
       err => console.log(err)
     );
   }
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
   if(nextProps.distance){
     this.setState({distance:nextProps.distance})
   }
  }

  onMapSuccess = (res) => {
    console.log(res.results)
    this.setState({places:res.results})
  };
  
  render() {
   // if(this.props.loading)
    return (
      <React.Fragment>
      <div id="wrapper">
     <section className="two-cols">
       <a href="#" className="btn-arrow"><i className="far fa-chevron-left" /></a>
      <SideBar/>

       <section className="block-content">
         {!this.props.loading?
       <Map google={this.props.google}
       initialCenter={{lat:this.state.lat, lng:this.state.lng}}
      zoom={5}>
        <Marker
          onClick={this.onMarkerClick}
          name={'current location'}
          
        />
      {/* <Listing places={this.state.places} /> */}
      <Circle
        radius={parseFloat(this.state.distance)*1000}
        center={{lat:parseFloat(this.state.lat),lng:parseFloat((this.state.lng))}}
        onMouseover={() => console.log('mouseover')}
        onClick={() => console.log('click')}
        onMouseout={() => console.log('mouseout')}
        strokeColor='transparent'
        strokeOpacity={0}
        strokeWeight={5}
        fillColor='#FF0000'
        fillOpacity={0.2}
      />
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>:<div>Loading map</div>}
       </section>
     </section>
   </div>
   </React.Fragment>
    );
  }
}
 

MapContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  getDistance:PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
     loading: state.dashboard.loading,
     distance:state.dashboard.distance
});

const WrappedContainer =GoogleApiWrapper({
  apiKey: "AIzaSyASUgxNOHFzT1QVWeL-2YVAu4kYTxnaTco"
})(MapContainer)


export default connect(mapStateToProps, { getDistance })(WrappedContainer);

