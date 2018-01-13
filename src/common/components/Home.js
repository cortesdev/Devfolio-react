import React, { Component } from 'react';
import Typist from 'react-typist';
import Banner from './layout/Banner';

  class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">

<Typist>
     I build scalable, maintainable and secure enterprise web applications.

      <Typist.Delay ms={500} />
      <br />
       for agencies, bluechips, start-ups and sometimes, myself. Find out More
      </Typist>


		  	<div className="post clearfix">

				<h2>Technologies I build with:</h2>
				<div className="skill-item clearfix">
					<h4>Frontend</h4>
					<ul className="">
                        <li><em><b>*****</b>HTML5</em></li>
                        <li><em><b>**</b>jQuery</em></li>
                        <li><em><b>*</b>Javascript</em></li>

 						<li><em><b>*****</b><b>*</b>CSS</em>
							<ul>
								<li><em><b>****</b>SASS</em></li>
								<li><em><b>**</b>LESS</em></li>
							</ul>
						</li>
 					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Client Side JS</h4>
					<ul className="">
 						<li><em><b>*</b><b> </b>React</em>
							<ul>
								<li><em><b>*</b>Redux</em></li>
							</ul>
						</li>
 					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Testing</h4>
					<ul>
						<li><em>Browserstack</em></li>
            <li><em>Cross Browser</em></li>
            <li><em>Cross Device</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
						<li><em><b>*</b>Nginx</em></li>
						<li><em><b>**</b>Webpack</em></li>
						<li><em>***Gulp</em></li>
						<li><em>**Grunt</em></li>
					</ul>
				</div>

				<div className="exclaimation">
					<em><b>*</b> This site is built with these technologies. View the <a href="https://github.com/cortesdev/Devfolio-React-app">github repo here</a>.</em><br/>
					<em><b>**</b> Yep, I know React can be used on the server side too. This site is Isomorphical rendered.</em>
				</div>

  			</div>


  			<div className="post clearfix">

				<h2>Companies I have worked with:</h2>

				<ul className="clients">
					<li className="brands spaceways">Spaceways</li>
					<li className="brands bundes">Bundesministerium</li>
					<li className="brands smartlaw">Smartlaw</li>
				</ul>

			</div>

			<Banner />

  		</div>

    );
  }
}

export default Home;
