import logo from "../images/Samsung-Logo.png";
import christmasHat from "../images/christmas-hat.png";
import bestCompanyLogo from "../images/Best-Places-to-Work-2021.png";

/**
 * Logo - component for rendering the NexGen logo and description
 * @returns {jsx}
 */
const Logo = () => {
  return (
    <div className="logo">
      <img
        className="best-company-logo"
        src={bestCompanyLogo}
        alt="logo for being best company"
      />
      <img className="hat" src={christmasHat} alt="christmas hat" />
      <img className="img-logo" src={logo} alt="picture of nex-gen's logo" />
      <p>
        We are SAMSUNG. A next generation team of software and web developers,
        helping different business partners grow in the digital environment for
        more than 15 years.
      </p>
      <h1>
        Job application form - <span>Apply now!</span>
      </h1>
    </div>
  );
};

export default Logo;
