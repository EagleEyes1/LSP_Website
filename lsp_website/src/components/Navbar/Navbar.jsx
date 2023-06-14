import React from "react";
import styles from "../Navbar/Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container p-2 movenav">
          <div>
            <img
              className={styles.iconnav}
              src="{{ url_for('static', filename='assets/images/play.png') }}"
            />
            <a className={styles.icontext} href="/">
              StreamKu
            </a>
          </div>
          <div class="d-flex">
            <a
              class="nav-link active abouttext"
              aria-current="page"
              href="/about"
            >
              About Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
