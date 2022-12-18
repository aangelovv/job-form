import logo from "../images/nex-gen-logo.jpg";
import christmasHat from "../images/christmas-hat.png";
import christmasLogo from "../images/merry-christmas.png";

const Logo = () => {
  return (
    <div className="logo">
      <img className="christmas-logo" src={christmasLogo} alt="christmas hat" />
      <img className="hat" src={christmasHat} alt="christmas hat" />
      <img className="img-logo" src={logo} alt="picture of nex-gen's logo" />
      <p>
        We are NexGen. A NEXt GENeration team of software and web developers,
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
