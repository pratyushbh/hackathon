/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
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
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/header.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png").default}
            ></img>
            <h1 className="h1-seo">NGO Finder</h1>
          </div>
          <h6 className="category category-absolute">
            Designed by{" "}
            <a target="_blank">
              <h1>Detonics</h1>
            </a>
            <div className="h2-seo">
            <h1>About US</h1>
            <p>We are website that acts as an interface between you and the NGOs, Allowing you to send problems to ur nearest reliable and relevent NGO.</p>
            </div>
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
