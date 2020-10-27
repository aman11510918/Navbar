import React, { Component } from "react";
import "./navbar.styles.scss";
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0,
    };
  }
  componentDidMount() {
    console.log(React.createRef())
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    // console.log(document.body.getBoundingClientRect());
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };

  render() {
    const { show } = this.state;
    console.log(show)
    return (
      <>
        <div
          className={`${
            show
              ? "navigate navigate_isVisible"
              : "navigate navigate_isNotVisible"
          }`}
        >
          <ul
            className={`${
              show
                ? "navList navList_isVisible"
                : "navList navList_isNotVisible"
            }`}
          >
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#services">services</a>
            </li>
            <li>
              <a href="#special">our special</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
