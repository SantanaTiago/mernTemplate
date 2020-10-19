import React, { Component } from "react";
import Logo from '../assets/notFound.jpg'
import {Link} from "react-router-dom"

class NotFound extends Component {
  
    render() {
      return (
        <div className="container">
                <img alt="Logo" src={Logo} />
                <h4>
                <b>NOT</b> FOUND
              </h4>
                <p>Resource is not found.</p>
                <Link to="/">
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  INDEX
                </button>
                </Link>
        </div>
      );
    }
  }
  export default NotFound

