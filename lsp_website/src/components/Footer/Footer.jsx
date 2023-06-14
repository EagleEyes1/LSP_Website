import React from "react";
import styles from "../Footer/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer
        class="text-center justify-content-center align-items-center text-lg-start bg-light text-muted mt-auto"
        style={{ bottom: "0", width: "100%", position: "absolute" }}
      >
        {/* Section: Links */}
        <section class="border-top pt-2 pb-4">
          <div class="container-fluid text-center text-md-start mt-2">
            {/* <!-- Grid row --> */}
            <div class="container">
              <div class="row mt-3">
                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mb-3">
                  {/* <!-- Content --> */}
                  <h6 class="text-uppercase fw-bold mb-2">
                    <div class="icons-footer">
                      <img
                        src={require("../../assets/images/logo.png")}
                        style={{
                          maxWidth: "50px",
                          maxHeight: "50px",
                          padding: "13px",
                        }}
                      />
                      <a className={styles.navbarBrand} href="#">
                        Baroqah Inc.
                      </a>
                    </div>
                  </h6>
                  <p>
                    PT. Baroqah adalah perusahaan yang bergerak di bidang
                    ekonomi masyarakat
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div
                  class="col-md-4 col-lg-3 col-xl-3 mb-md-0 mb-4"
                  style={{ right: "0", position: "absolute" }}
                >
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase contact fw-bold mb-4">Contact</h6>
                  <a
                    class="usbottom"
                    style={{ textDecoration: "none", color: "#6c757d" }}
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ marginRight: "10px" }}
                    />
                    About Us
                  </a>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          class="text-center pt-2 pb-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a class="text-reset fw-bold" href="#">
            Baroqah Inc.
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
};

export default Footer;
