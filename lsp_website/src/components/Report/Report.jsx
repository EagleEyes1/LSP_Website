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

  let totalGaji = 0;
  if (salaryData?.gaji) {
    totalGaji = salaryData.gaji.reduce(
      (total, item) => total + item.gaji_akhir,
      0
    );
  }

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
          <div style={{ textAlign: "right" }}>
            <strong>Total Gaji: {totalGaji}</strong>
          </div>
        </PDFExport>
      </Container>
    </>
  );
}

export default Report;
