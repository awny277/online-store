import React from "react";
import { ContactData } from "./ContactData";
import "./style.css";
class Contact extends React.Component {
  state = {
    Name: "",
    Email: "",
    Phone: "",
    Message: " ",
  };
  confirm() {
    let NewData = new ContactData(
      this.state.Name,
      this.state.Email,
      parseInt(this.state.Phone),
      this.state.Message
    );
    this.props.location.AddData(NewData);
  }
  render() {
    return (
      <div className="contact container">
        <h1 className="text-center">contact us</h1>
        <div className="row justify-content-around">
          <div className="col-md-5">
            <h3>DROP US A LINE</h3>
            <form className="was-validated" onSubmit={this.confirm}>
              <div className="contactInput">
                <label htmlFor="">Your Name (required)</label>
                <input
                  type="text"
                  onChange={(e) => this.setState({ Name: e.target.value })}
                  required
                />
              </div>
              <div className="contactInput">
                <label htmlFor="">Your Email (required)</label>
                <input
                  type="email"
                  onChange={(e) => this.setState({ Email: e.target.value })}
                  required
                />
              </div>
              <div className="contactInput">
                <label htmlFor="">Your Phone Number</label>
                <input
                  type="number"
                  onChange={(e) => this.setState({ Phone: e.target.value })}
                />
              </div>
              <div className="contactInput">
                <label htmlFor="">Your Message (required)</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  onChange={(e) => this.setState({ Message: e.target.value })}
                  required
                ></textarea>
              </div>
              <div className="contactInput">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <h3>CONTACT INFORMATION</h3>
            <div className="contactInfo lead">
              <p>
                We love to hear from you on our customer service, merchandise,
                website or any topics you want to share with us. Your comments
                and suggestions will be appreciated. Please complete the form
                below.
              </p>
              <div className="info">
                <i className="fas fa-home"></i>
                <p>184 Main Rd E, St Albans VIC 3021, elmahalla</p>
              </div>
              <div className="info">
                <i className="fas fa-envelope"></i>
                <p>contact@company.com </p>
              </div>
              <div className="info">
                <i className="fas fa-phone-alt"></i>
                <p>+123 456 7898</p>
              </div>
              <div className="info">
                <i className="far fa-clock"></i>
                <p>Everyday 9:00-17:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
