import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import ContentSalaryTable from "../ContentSalaryTable/ContentSalaryTable";

function Report() {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
    },
    section: {
      textAlign: "center",
      fontSize: "50px",
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
  });
  return (
    <>
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Laporan Penggajian</Text>
              <ContentSalaryTable />
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}

export default Report;
