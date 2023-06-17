import React from "react";
import Navbars from "../components/Navbars/Navbars";
import ContentSalaryTable from "../components/ContentSalaryTable/ContentSalaryTable";
import Footer from "../components/Footer/Footer";

function SalaryPage() {
  return (
    <>
      <Navbars />
      <ContentSalaryTable />
      <Footer />
    </>
  );
}

export default SalaryPage;
