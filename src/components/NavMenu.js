import React, { Component } from 'react';
import { Navbar, NavItem } from 'reactstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;


  render () {
    return (
      <header>
        <Navbar className="navBar_start" style={{ backgroundColor: "black" }}>
            <img src ="https://stealthify.io/wp-content/uploads/2020/04/Stealth.ify-Logo-Dark-v1-cropped-300x86.png" alt= "logo" style = {{width : "100px"}}/>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                <button type="button" className="btn btn-danger ">
                  Get in touch
                </button>
                </NavItem>
              </ul>
        </Navbar>
      </header>
    );
  }
}
