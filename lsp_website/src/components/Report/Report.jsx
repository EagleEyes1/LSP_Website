// import React from "react";
// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   PDFViewer,
//   Ta
// } from "@react-pdf/renderer";
// import useGetSalary from "../../hooks/useGetSalary";

// function Report() {
//   const styles = StyleSheet.create({
//     page: {
//       backgroundColor: "white",
//       color: "black",
//     },
//     section: {
//       textAlign: "center",
//       fontSize: "20px",
//       margin: 10,
//       padding: 10,
//     },
//     viewer: {
//       width: window.innerWidth, //the pdf viewer will take up all of the width and height
//       height: window.innerHeight,
//     },
//   });

//   const { salaryData, salaryLoading, salaryError } = useGetSalary();
//   console.log(salaryData);
//   return (
//     <>
//       <PDFViewer style={styles.viewer}>
//         {/* Start of the document*/}
//         <Document>
//           {/*render a single page*/}
//           <Page size="A4" style={styles.page}>
//             <View style={styles.section}>
//               <Table>
//                 <TableHeader>
//                   <TableCell style={styles.tableCellHeader}>
//                     <Text>Name</Text>
//                   </TableCell>
//                   <TableCell style={styles.tableCellHeader}>
//                     <Text>Age</Text>
//                   </TableCell>
//                   <TableCell style={styles.tableCellHeader}>
//                     <Text>City</Text>
//                   </TableCell>
//                 </TableHeader>
//               </Table>
//               <Text>Laporan Penggajian PT. Baroqah</Text>
//               <Table striped bordered hover>
//                 <thead>
//                   <tr>
//                     <th>No</th>
//                     <th>Nama</th>
//                     <th>Jabatan</th>
//                     <th>Gaji Diterima</th>
//                     <th>Tanggal Gaji</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {salaryData?.gaji.map((item, index) => (
//                     <tr key={item.id_gaji}>
//                       <td>{index + 1}</td>
//                       <td>{item?.gaji_karyawan?.nama}</td>
//                       <td>{item?.gaji_karyawan?.jabatan}</td>
//                       <td>{item.gaji_akhir}</td>
//                       <td>{item.tgl_gaji}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </View>
//           </Page>
//         </Document>
//       </PDFViewer>
//     </>
//   );
// }

// export default Report;

// import React from "react";
// import { Worker } from "@react-pdf-viewer/core";

// function Report() {
//   return (
//     <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
//       {/* <!-- The viewer component will be put here -->
//     ... */}
//     </Worker>
//   );
// }

// export default Report;

import React, { useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import Table from "react-bootstrap/Table";
import useGetSalary from "../../hooks/useGetSalary";
import Container from "react-bootstrap/esm/Container";
import { Button } from "@progress/kendo-react-buttons";

function Report() {
  const pdfExportComponent = useRef(null);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };
  const { salaryData, salaryLoading, salaryError } = useGetSalary();
  return (
    <>
      <Container>
        <PDFExport ref={pdfExportComponent} paperSize="A4">
          <h3 style={{ textAlign: "center" }}>Daftar Gaji PT. Baroqah</h3>
          <Button
            style={{ float: "right", marginBottom: "3%" }}
            primary={true}
            onClick={handleExportWithComponent}
          >
            Cetak
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Jabatan</th>
                <th>Gaji Diterima</th>
                <th>Tanggal Gaji</th>
              </tr>
            </thead>
            <tbody>
              {salaryData?.gaji.map((item, index) => (
                <tr key={item.id_gaji}>
                  <td>{index + 1}</td>
                  <td>{item?.gaji_karyawan?.nama}</td>
                  <td>{item?.gaji_karyawan?.jabatan}</td>
                  <td>{item.gaji_akhir}</td>
                  <td>{item.tgl_gaji}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </PDFExport>
      </Container>
    </>
  );
}

export default Report;
