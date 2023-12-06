import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  
  const style1 = {
   
    marginLeft: "22px"
 }

  const style = {
     color: "#0072BC",
     fontSize: "30px",
     marginRight: "12px"
  }
  return (
    <>
      <footer>
        <div className="footer">
          <h1>Contact Us</h1>
          <div className="holder">
            {/* contact-address-socialMedia-container */}
            <div className="contact-address-socialMedia-container">
              <div className="contact-address">
                <div className="contact">
                  <p>
                    Contacts:
                    <br />
                    <span>011 023 0984</span>
                  </p>
                  <br />  <br />
                  <p>
                    Email:
                    <br />
                    <span>
                      iuebue@company
                      <br />
                      .co.za
                    </span>
                  </p>
                  <h2>
                    Our Agencies
                    <FaArrowRight style={{ marginLeft: "5px" }} />
                  </h2>
                </div>
                {/* CONTACT END */}
                <div className="address">
                  <h3>Address</h3>
                  <h5>Johannesburg</h5>
                  <ul>
                    <li>Tel: +27 11 434 1330</li>
                    <li>Fax: +27 11 434 1678</li>
                    <li>
                      Email: <br/><span>sales@desyn.co.za </span>
                    </li>
                    <li>Address: 39 la Rochelle Road, Springfield, 2137 P.O. Box 57113, Springfield, 2190</li>
                  </ul>
                </div>
              </div>
              {/* contact-address */}
              <div className="socialMedia">
                <span>Social Media</span> <FaFacebook style={style}/>
                <AiFillInstagram style={style}/>
                <TwitterIcon style={style}/>
              </div>
            </div>
            {/* contact-address-socialMedia-container end*/}
            {/* form section */}
            <div className="form">
              <h3>Contact Form</h3>
              <form>
                <input type="text" placeholder="Your Name......." />
                <input type="text" placeholder="Your Surname......." />
                <input type="text" placeholder="Your Address......." />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your Message......."
                ></textarea>
                <button>Submit</button>
              </form>
            </div>
            {/* form section end*/}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
