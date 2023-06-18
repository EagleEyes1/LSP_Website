import React from "react";

function AboutUs() {
  return (
    <div class="container-fluid text-center about pt-5 pb-5">
      <div class="container">
        <div class="row" style={{ margin: "0 auto" }}>
          <div class="col">
            <img
              src={require("../../assets/images/foto.jpg")}
              style={{ borderRadius: "50%", maxWidth: "300px" }}
            />
          </div>
          <div class="col d-flex align-items-center">
            <div style={{ fontSize: "30px" }}>
              Fahd Erlangga B.M <br />
              52419155 <br />
              4IA01
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
