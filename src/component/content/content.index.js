import React, { Component } from "react";
import "./content.styles.scss";

export default class Content extends Component {
  render() {
    return (
      <>
        <section id="home" className="topMargin home">
          <h3>The Item 1</h3>
        </section>

        <section id="services" className="topMargin services">
          <h3>The Item 2</h3>
        </section>

        <section id="special" className="topMargin special">
          <h3>The Item 3</h3>
        </section>

        <section id="about" className="topMargin about">
          <h3>The Item 4</h3>
        </section>

        <section id="contact" className="topMargin contact">
          <h3>The Item 5</h3>
        </section>
      </>
    );
  }
}
