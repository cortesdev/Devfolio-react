import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Navigation extends Component {

  render() {
    return (
    <div className="navbar-collapse navbar-toggleable-sm">
        <div className="Navigation nav-wrapped navbar-nav">
            <a className="navbar-brand" href="#"> </a>
            <nav className="nav navbar-nav">
                <Link to="/home" className="navbar-nav-item home" onClick={this.eventCloseSidebar} activeClassName="active"><i className="la la-home"></i></Link>
                <Link to="/portfolio" className="navbar-nav-item portfolio" onClick={this.eventCloseSidebar} activeClassName="active"><i className="la la-folder-open portfolio"></i> </Link>
                <Link to="/services" className="navbar-nav-item services" onClick={this.eventCloseSidebar} activeClassName="active"><i className="la la-desktop services" ></i></Link>
                <Link to="/about" className="navbar-nav-item about" onClick={this.eventCloseSidebar} activeClassName="active"><i className="la la-info-circle about"></i></Link>
            </nav>
        </div>

        <div className="Navigation Navigation-item Navigation-footer">
            <p>
                Visit
                <br/>
                  <a href="https://github.com/cortesdev"><i className="la la-gitHub"></i></a><br/>
                  <a href="https://www.linkedin.com/in/cortesdev"><i className="la la-linkedin"></i></a><br/>
                  <a href="https://facebook.com/cortesde"><i className="la la-facebook"></i></a><br/>

            </p>
        </div>

    </div>
    );
  }
}

export default Navigation;
