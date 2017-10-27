import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
    <div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
			    <a href="/" title="Home">Cortesdev</a>
			    <small>Front-End Web Developer based in Berlin</small>
			  </h3>
			</div>
		</div>
    );
  }
}

export default Header;