import React, { Component } from "react";

import Navigation from '../layout/navigation';
import Header from '../layout/header';
import Features from '../layout/features';
import About from '../layout/about';
import Services from '../layout/services';
import Team from '../layout/Team';
import Contact from '../layout/contact';

import JsonData from '../../data/data.json';

export class Landing extends Component {
    state = {
      landingPageData: {},
    }
    getlandingPageData() {
      this.setState({landingPageData : JsonData})
    }
  
    componentDidMount() {
      this.getlandingPageData();
    }

    render() {
        return (
            <div>
              <Navigation />
              <Header data={this.state.landingPageData.Header} />
              <Features data={this.state.landingPageData.Features} />
              <About data={this.state.landingPageData.About} />
              <Services data={this.state.landingPageData.Services} />
              <Team data={this.state.landingPageData.Team} />
              <Contact data={this.state.landingPageData.Contact} />
            </div>
        )
    }
}

export default Landing;