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
                <Link to="/home" className="navbar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Home</Link>
                <Link to="/portfolio" className="navbar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Portfolio</Link>
                <Link to="/services" className="navbar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Services</Link>
                <Link to="/about" className="navbar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">About</Link>
            </nav>
        </div>

        <div className="Navigation Navigation-item Navigation-footer">
            <p>
                Visit <a href="https://github.com/cortesdev">My GitHub Repo</a><br/>
                Visit <a href="https://www.linkedin.com/in/cortesdev">My Linkedin</a><br/>
                Visit <a href="https://twitter.com/cortesdev">My Twitter</a><br/>
            </p>
        </div>        

    </div>
    );
  }
}

export default Navigation;