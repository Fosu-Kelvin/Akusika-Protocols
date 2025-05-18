import "./Service.scss";
import img01 from "../images/ser2.jpg";
import img02 from "../images/IMG_3524.jpg";
import img03 from "../images/IMG_3521.jpg";
import img04 from "../images/IMG_3522.jpg";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <main className="service_container">
      <section className="service_container-box1">
        <img className="service-img" src={img01} alt="service banner" />
        <h1>WHAT WE DO</h1>
        <p>
          At Akusika Protocols, we pride ourselves in being an extension of your
          organization. Our team of experts service a wide variety of events.
          Let us help you plan, design, and produce your next gathering.
        </p>
      </section>
      <section className="service_container-box2">
        <h1> Our Cream & Sugar (Event Specialties)</h1>
        <div className="box02">
          <img src={img02} alt="" />
          <img src={img04} alt="" />
          <img src={img03} alt="" />
        </div>
        <div className="box02-2">
          <h2>HIGHTLIGHTED SERVICES</h2>
          <ol>
            <li>Traditonal wedding and ceremony</li>
            <li>Cultural festivals and celebrations</li>
            <li>Corporate events</li>
            <li>Funeral ceremonies</li>
            <li>Event ettiquete consulting</li>
            <li>Staff training</li>
            <li>Protocol guidanceProtocol guidance</li>
          </ol>
        </div>
      </section>
      <section className="service_container-box3">
        <h1>Our Process</h1>
        <div className="box3-div-container">
          <div>
            <h3>Step 1: </h3>
            <h4>INTRODUCTION</h4>
            <p>
              During our first consultation, we will learn about your
              organization, event goals, values, and trajectory. This is where
              we determine if we are the perfect fit
            </p>
          </div>
          <div>
            <h3>Step 2: </h3>
            <h4>CUSTOMIZATION</h4>
            <p>
              Following our conversation, we will work on personalizing the
              perfect package for what your event needs. All clients start with
              our base services.
            </p>
          </div>
          <div>
            <h3>Step 3: </h3>
            <h4>ACTIVATION</h4>
            <p>
              Once the contract is signed, we launch into action! Breathe a sign
              of relief - we are now in this together!
            </p>
          </div>
        </div>
      </section>
      <section className="service_container-box4">
        <h1>Start Transforming Your Vision into Reality</h1>
        <p>From concept to creation, our seasoned event planning team is ready to help you take the first step towards planning an unforgettable experience. Let us discuss your goals, make every detail count, & execute the perfect event that wows your guests.</p>
        <Link to={'/contact'}><button>Book consultation</button></Link>
      </section>
    </main>
  );
};

export default Service;
