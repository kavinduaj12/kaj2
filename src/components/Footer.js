import React, { Component } from "react";
import { greeting } from '../Name';
import './footer.css'

class Footer extends Component {
    render() {
      console.log("Theme by KAJ")
      return (
        <div className="foot">
          
 
   


          <p>Made with <a href="https://www.kavinduaj1.tk">Master-Portfolio</a> <span role="img" aria-label="Heart"> ❤️ </span> by { greeting.full_name } </p>
          
        </div>
      );
    }
  }
  
  export default Footer;
