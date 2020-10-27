import React, { Component } from "react";
import Content from "../content/content.index";
import Footer from "../footer/footer.index";
import Navbar from "../navbar/navbar.index";
import "./dashboard.styles.scss";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="wrapperContainer">
        <nav className='nav'>
          <Navbar />
        </nav>
        <section className="main">
          <Content/>
        </section>
        <footer className='footer'>
          <Footer/>
        </footer>
      </div>
    );
  }
}
