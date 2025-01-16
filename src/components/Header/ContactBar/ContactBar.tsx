import { Phone, Mail, Clock } from "lucide-react";
import "./ContactBar.css";

const ContactBar = () => {
  return (
    <div className="contact-bar">
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-item">
            <Phone size={16} />
            <a href="tel:(+91)(9541069998)" className="contact-text">
              {" "}
              +919541069998{" "}
            </a>
          </div>

          <div className="contact-item">
            <Mail size={16} />
            <a href="mailto:somanyitmncr@gmail.com" className="contact-text">
              {" "}
              somanyitmncr@gmail.com{" "}
            </a>
          </div>

          <div className="contact-item">
            <Clock size={16} />
            <span className="contact-text">Mon-Fri: 9:00 AM - 5:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
