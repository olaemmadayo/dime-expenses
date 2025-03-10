import "../styles/pricing.css";
import lovely from '../assets/images/lovely.png'; 
import crownImg  from '../assets/images/crown.png';
import shareImg  from '../assets/images/share.png';
import arrowImg  from '../assets/images/Arrow_07.png';
import ticketCircle  from '../assets/images/tick-circle.png';

import closeCircle  from '../assets/images/close-circle.png';
import HrHeader from "./HrHeader";




const PricingForm = () => {
  return (
    <div className="pricing-container">
      <HrHeader/>
      <h1>Ready to Get Started?</h1>
      <p>Choose a plan that suits your business needs</p>

      <div className="toggle-section">
        <div className="toggle-options">
          <span>Monthly</span>
          <div className="toggle-switch">
            <input type="checkbox" id="toggle" />
            <label htmlFor="toggle"></label>
          </div>
          <span>Yearly</span>
        </div>
        <div className="card-head">
          <span className="save-text">Save 45%</span>
          <img src={arrowImg} alt="" className="save-img" />
        </div>
      </div>

      <div className="pricing-cards">
        {/* Free Plan */}
        <div className="pricing-card">
          <div className="card-header">
            <img src={lovely} alt="" />
            <h2>Free</h2>
          </div>
          <p>Perfect plan to get started</p>
          <h3>
            <span className="price-bold">N0</span>
            <span className="price-fade">/month</span>
          </h3>
          <p>
            A free plan grants you access to some cool features of Spend In.
          </p>
          <ul>
            <li>
              <img
                src={ticketCircle}
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              Sync accross device
            </li>
            <li>
              <img
                src={ticketCircle}
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              5 workspace
            </li>
            <li>
              <img
                src={ticketCircle}
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              Collaborate with 5 user
            </li>
            <li>
              <img
                src={closeCircle }
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              Sharing permission
            </li>
            <li>
              <img
                src={closeCircle }
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              Admin tools
            </li>
            <li>
              <img
                src={closeCircle }
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              100+ integrations
            </li>
          </ul>

          <button className="cta-button">Get Your Free Plan</button>
        </div>

        {/* Pro Plan */}
        <div className="pricing-card popular">
          <div className="card-header">
            <img src={crownImg} alt="" />
            <h2>
              Pro <span className="tag">Popular</span>
            </h2>
          </div>
          <p>Perfect plan for professionals!</p>
          <h3>
            <span className="price-bold">N1500</span>
            <span className="price-fade">/month</span>
          </h3>
          <p>
            A free plan grants you access to some cool features of Spend In.
          </p>
          <ul>
            <li>
              <img
                src={ticketCircle}
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              Everything in Free Plan
            </li>
            <li>
              <img
                src={ticketCircle}
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              Unlimited workspaces
            </li>
            <li>
              <img
                src={ticketCircle}
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              Collaborative workspace
            </li>
            <li>
              <img
                src={ticketCircle}
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              Sharing permission
            </li>
            <li>
              <img
                src={ticketCircle}
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              Admin tools
            </li>
            <li>
              <img
                src={ticketCircle}
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              100+ integrations
            </li>
          </ul>
          <button className="cta-button">Get Started</button>
        </div>

        {/* Ultimate Plan */}
        <div className="pricing-card">
          <div className="card-header">
            <img src={shareImg} alt="" />
            <h2>Ultimate</h2>
          </div>
          <p>Best suits for great company!</p>

          <h3>
            <span className="price-bold">N3500</span>
            <span className="price-fade">/month</span>
          </h3>

          <p>
            A free plan grants you access to some cool features of Spend In.
          </p>
          <ul>
            <li>
              <img
                src={ticketCircle}
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              Everything in Free Plan
            </li>
            <li>
              <img
                src={ticketCircle}
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              Daily performance reports
            </li>
            <li>
              <img
                src={ticketCircle}
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              Dedicated assistant
            </li>
            <li>
              <img
                src={ticketCircle}
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              Artificial intelligence
            </li>
            <li>
              <img
                src={ticketCircle}
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              Marketing tools & automations
            </li>
            <li>
              <img
                src="tick-circle.png"
                alt=""
                style={{ width: "20px", marginRight: "8px" }}
              />
              Advanced security
            </li>
          </ul>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default PricingForm;
