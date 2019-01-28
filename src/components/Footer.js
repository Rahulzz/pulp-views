import React, { Component } from "react";
import pulp from "../static/images/footer-pulp-icon.png";
import ed from "../static/images/footer-ed-icon.png";
import windows from "../static/images/footer-windows.png";
import mac from "../static/images/footer-mac.png";
import android from "../static/images/footer-android.png";
import ios from "../static/images/footer-ios.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer full-screen-wrapper">
        <div className="left-section">
          <div className="pulp-definition">
            Pulp - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin non nisi ut ex malesuada bibendum eu sed nulla. Mauris at
            blandit purus. Sed vestibulum est sit amet lorem tincidunt, non
            feugiat velit aliquet. Mauris magna risus, varius id euismod quis,
            egestas vitae urna. Fusce aliquam, leo vel scelerisque sagittis,
            dolor risus blandit arcu, eu viverra est leo in orci. Duis rhoncus,
            dui sed congue blandit.
          </div>
          <div className="title">Stay connected</div>
          <div className="icons">
            <img src={windows} />
            <img src={mac} />
            <img src={android} />
            <img src={ios} />
          </div>
        </div>
        <div className="right-section">
          <div className="icons">
            <img src={pulp} />
            <img src={ed} />
          </div>
          <div className="title">
            we handle the<br />etceteras for you
          </div>
          <div className="separator" />
          <div className="links">
            <span>Coming Soon</span>
            <span>Faq</span>
            <span>Terms</span>
            <span>Privacy</span>
          </div>
          <div className="rights">
            © 2018 Pulp. All rights reserved by Ermintrud
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
