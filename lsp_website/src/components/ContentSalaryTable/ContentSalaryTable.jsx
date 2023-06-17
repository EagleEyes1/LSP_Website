import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import useGetSalary from "../../hooks/useGetSalary";
import { useParams } from "react-router-dom";
import useGetSalaryById from "../../hooks/useGetSalaryById";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";
import useInsertSalary from "../../hooks/useInsertSalary";
import useGetDepartById from "../../hooks/useGetDepartById";
import useGetDepartForSalary from "../../hooks/useGetDepartForSalary";
import useDeleteSalary from "../../hooks/useDeleteSalary";
import Swal from "sweetalert2";
import ModalEditSalary from "../ModalEditSalary/ModalEditSalary";

function ContentSalaryTable() {
  const [state, setState] = useState({
    id_gaji: "",
    karyawan_id: "",
    gaji_pokok: 0,
    gaji_akhir: 0,
    tgl_gaji: "",
  });
  const { id } = useParams();
  //   console.log(id);
  const { idSalaryData, idSalaryLoading, idSalaryError } = useGetSalaryById(id);

  console.log(idSalaryData);

  // Ambil ID Edit
  const [currentID, setCurrentID] = useState("");

  // Ambil ID Delete
  const [idDelete, setidDelete] = useState("");

  // State Modal Edit
  const [show, setShow] = useState(false);

  const handleShow = (e, id) => {
    setShow(true);
    // console.log(id);
    setCurrentID(id);
  };

  // State Modal Tambah
  const [showAdd, setShowAdd] = useState(false);

  const handleCloseAdd = () => setShowAdd(!showAdd);
  const handleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  // State Modal Delete
  const [showDelete, setShowDelete] = useState(false);

  const handleCloseDelete = () => setShowDelete(!showDelete);
  const handleShowDelete = (idx) => {
    setShowDelete(!showDelete);
    setidDelete(idx);
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const { insertNewSalary, insertSalaryLoading, insertSalaryError } =
    useInsertSalary();

  const { departSalaryData, departSalaryLoading, departSalaryError } =
    useGetDepartForSalary(id);

  const { deleteSalaryLoading, deleteSalaryById } = useDeleteSalary();

  console.log(departSalaryData);

  const addSalary = (newSalary) => {
    const newData = {
      ...newSalary,
    };
    insertNewSalary({
      variables: {
        id_gaji: newData.id_gaji,
        karyawan_id: newData.karyawan_id,
        gaji_pokok: newData.gaji_pokok,
        gaji_akhir: newData.gaji_akhir,
        tgl_gaji: newData.tgl_gaji,
      },
    });
  };

  const deleteOldSalary = (idx) => {
    deleteSalaryById({
      variables: {
        id_gaji: idx,
      },
    });
    handleCloseDelete();
    Swal.fire("Berhasil!", "Data Berhasil Dihapus", "success");
  };

  //   console.log(salaryData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      state.id_gaji &&
      state.karyawan_id &&
      state.gaji_pokok &&
      state.gaji_akhir &&
      state.tgl_gaji
    ) {
      const newData = {
        id_gaji: uuidv4(),
        karyawan_id: id,
        gaji_pokok: state.gaji_pokok,
        gaji_akhir: state.gaji_akhir,
        tgl_gaji: state.tgl_gaji,
      };
      addSalary(newData);
      setState({
        id_gaji: "",
        karyawan_id: "",
        gaji_pokok: 0,
        gaji_akhir: 0,
        tgl_gaji: "",
      });
    } else {
      alert("Data Masih Ada Yang Belum Diisi");
    }
  };

  return (
    <>
      <div class="container mt-5 mb-5 content">
        <div
          class="row mb-5"
          style={{ justifyContent: "center", fontSize: "50px" }}
        >
          Daftar Gaji {idSalaryData?.gaji[0]?.gaji_karyawan?.nama}
        </div>
        <Button
          variant="success"
          onClick={handleShowAdd}
          style={{ marginBottom: "2%", float: "right" }}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
          Tambah Data
        </Button>{" "}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Gaji Pokok</th>
              <th>Gaji Akhir</th>
              <th>Tanggal Gaji</th>
              <th style={{ textAlign: "center" }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {idSalaryData?.gaji.map((item, index) => (
              <tr key={item.id_gaji}>
                <td>{index + 1}</td>
                <td>{item.gaji_pokok}</td>
                <td>{item.gaji_akhir}</td>
                <td>{item.tgl_gaji}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    variant="secondary"
                    onClick={(e) => handleShow(e, item.id_gaji)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                    Edit
                  </Button>{" "}
                  <Button
                    onClick={() => handleShowDelete(item.id_gaji)}
                    variant="danger"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                    Hapus
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modal Edit Gaji  */}
      <ModalEditSalary id={currentID} setShow={setShow} show={show} />

      {/* Modal Tambahkan Gaji */}
      <Modal show={showAdd} onHide={handleCloseAdd} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Gaji Karyawan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInputNama"
            label="Gaji Pokok"
            className="mb-3"
          >
            <Form.Control
              onChange={onChange}
              name="gaji_pokok"
              type="number"
              value={state.gaji_pokok}
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputNama"
            label="Tanggal Gaji"
            className="mb-3"
          >
            <Form.Control
              onChange={onChange}
              name="tgl_gaji"
              type="date"
              value={state.tgl_gaji}
              placeholder="name@example.com"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Tutup
          </Button>
          <Button variant="primary" onClick={handleCloseAdd}>
            Tambahkan
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Hapus Gaji */}
      <Modal show={showDelete} onHide={handleCloseDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Peringatan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Data yang sudah dihapus tidak dapat dipulihkan. Anda yakin?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Tutup
          </Button>
          <Button variant="danger" onClick={() => deleteOldSalary(idDelete)}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContentSalaryTable;
