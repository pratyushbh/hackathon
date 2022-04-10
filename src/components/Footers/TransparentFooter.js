/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.creative-tim.com?ref=nukr-transparent-footer"
                target="_blank"
              >
                NGO Finder
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          . Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-transparent-footer"
            target="_blank"
          >
            Detonics
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
