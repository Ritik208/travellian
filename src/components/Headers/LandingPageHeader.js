import React from "react";

import { Button, Container } from "reactstrap";
import Tile from "./Tile1";

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/temp3.jpg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filters" />
        <Container>
          <div className="sdf" style={{marginLeft:'0px', color:'white'}}>
            <h1 style={{ fontWeight: 'bold' }}>Start your unforgettable journey with us.</h1>
            <h3 style={{ fontWeight: 'bold' }}>The best travel for your journey begins now</h3>
            <br />
            
          </div>
          <Tile/>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
