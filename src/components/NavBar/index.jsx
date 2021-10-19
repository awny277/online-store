import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

class NavBar extends React.Component {
  state = {
    sec: 5,
    min: 1,
    hr: 7,
  };

  componentDidMount() {
    setInterval(() => {
      let second = this.state.sec;
      let mintues = this.state.min;
      let hour = this.state.hr;
      if (second > 0) {
        second--;
      } else {
        second = 59;
        if (mintues > 0) {
          mintues--;
        } else {
          mintues = 59;
          hour--;
        }
      }

      this.setState({
        sec: second,
        min: mintues,
        hr: hour,
      });
    }, 1000);
  }
  render() {
    let product = this.props.register;

    // Login
    async function Login(e) {
      const { value: email } = await Swal.fire({
        // allowOutsideClick: false,
        title: "Login",
        input: "email",
        inputLabel: "Your email address",
        inputPlaceholder: "Enter your email address",
      });
      if (email) {
        const { value: password } = await Swal.fire({
          // allowOutsideClick: false,
          title: "Login",
          input: "password",
          inputLabel: "Password",
          inputPlaceholder: "Enter your password",
          inputAttributes: {
            maxlength: 10,
            autocapitalize: "off",
            autocorrect: "off",
          },
        });

        if (password) {
          // If Password or email Rong return Reister
          if (
            // window.localStorage.length === 0 ||
            window.localStorage.getItem("password") !== password ||
            window.localStorage.getItem("email") !== email
          ) {
            e.preventDefault();
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Emaill or Password is Wrong",
              footer: `<button class="register btn" >register</button>`,
            });
            document.querySelector(".register").onclick = () => {
              product();
            };
          }
        }
      }
    }
    return (
      <div className="nav-bar navBarItem">
        <p className="sale">
          today deal sale of 70% . End in 0 Days{" "}
          <span>
            07:{this.state.min}:{this.state.sec}
          </span>{" "}
          <NavLink className="harry" to="/MenProducts">
            Harry Up
          </NavLink>
          <span>
            <i className="fas fa-arrow-right arrow"></i>
          </span>
        </p>
        <div className="offer text-center d-none d-lg-flex">
          <ul className=" list-unstyled ">
            <li className="d-inline m-3">
              <i className="fas fa-phone-alt"></i> <span>+0123456789</span>
            </li>
            <li className="d-inline">
              <i className="fas fa-envelope"></i> <span>store@gmail.com</span>
            </li>
          </ul>
          <p className="p-center">
            summer sale discount off <span className="red">50%</span>{" "}
            <span className="black">!shop now</span>
          </p>
          <div className="btn-lang">
            <a
              href="https://www.facebook.com/abdo.awny.9/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/Abdelrahman2486"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/abdelrahman_awny/ "
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/abdelrahman-awny/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/awny277"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand realx" to="/">
              Relax Store
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-link " aria-current="page" to="/home">
                  Home
                </NavLink>
                <NavLink className="nav-link Man" to="/MenProducts">
                  Man
                </NavLink>
                <NavLink className="nav-link" to="/WomenProducts">
                  women
                </NavLink>
                <NavLink className="nav-link Kids" to="/KidsProducts">
                  kids
                </NavLink>
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
                <NavLink className="nav-link" to="/Contact">
                  Contact
                </NavLink>
                <NavLink className="nav-link navI cart" to="/cart">
                  <i className="fas fa-shopping-cart  "></i>{" "}
                  <span>{this.props.count}</span>
                </NavLink>
                <NavLink className="nav-link navI love" to="/WishList">
                  <i className="fas fa-heart  "></i>
                  <span>{this.props.wish}</span>
                </NavLink>
                <button className="btn" onClick={Login}>
                  {" "}
                  Login
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
