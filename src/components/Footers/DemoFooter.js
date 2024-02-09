import React from "react";

import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  target="_blank"
                >
                  Travellian
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
