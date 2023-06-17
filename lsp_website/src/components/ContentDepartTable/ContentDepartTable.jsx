import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import useGetDepart from "../../hooks/useGetDepart";
import ModalEditDepart from "../ModalEditDepart/ModalEditDepart";
import Modal from "react-bootstrap/Modal";
import useDeleteDepart from "../../hooks/useDeleteDepart";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import useInsertDepart from "../../hooks/useInsertDepart";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function ContentDepartTable() {
  const [state, setState] = useState({
    nama_jabatan: "",
  });

  const { departData, departLoading, departError } = useGetDepart();

  const { deleteDepartLoading, deleteDepartById } = useDeleteDepart();

  const { insertNewDepart, insertDepartLoading, insertDepartError } =
    useInsertDepart();

  // Ambil ID Delete
  const [idDelete, setidDelete] = useState("");

  // Ambil ID Edit
  const [currentID, setCurrentID] = useState("");

  // State Modal Tambah
  const [showAdd, setShowAdd] = useState(false);

  const handleCloseAdd = () => setShowAdd(!showAdd);
  const handleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  console.log(state);

  // State Modal Delete
  const [showDelete, setShowDelete] = useState(false);

  const handleCloseDelete = () => setShowDelete(!showDelete);
  const handleShowDelete = (id) => {
    setShowDelete(!showDelete);
    setidDelete(id);
  };

  // State Modal Edit
  const [show, setShow] = useState(false);

  const handleShow = (e, id) => {
    setShow(true);
    setCurrentID(id);
  };

  const addDepart = (newDepart) => {
    const newData = {
      ...newDepart,
    };
    insertNewDepart({
      variables: {
        nama_jabatan: newData.nama_jabatan,
      },
    });
  };

  const deleteOldDepart = (idx) => {
    deleteDepartById({
      variables: {
        id_jabatan: idx,
      },
    });
    handleCloseDelete();
    Swal.fire("Berhasil!", "Data Berhasil Dihapus", "success");
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    if (state.nama_jabatan) {
      const newData = {
        nama_jabatan: state.nama_jabatan,
      };
      addDepart(newData);
      setState({
        nama_jabatan: "",
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
          Karyawan PT. Baroqah
        </div>
        <Button
          variant="success"
          onClick={handleShowAdd}
          style={{ marginBottom: "2%", float: "right" }}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
          Tambah Data
        </Button>{" "}
        <Table striped bordered hover style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>No</th>
              <th>Jabatan</th>
              <th style={{ textAlign: "center" }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {departData?.jabatan.map((item, index) => (
              <tr key={item.id_jabatan}>
                <td>{index + 1}</td>
                <td>{item.nama_jabatan}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    variant="secondary"
                    onClick={(e) => handleShow(e, item.id_jabatan)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                    Edit
                  </Button>{" "}
                  <Button
                    onClick={() => handleShowDelete(item.id_jabatan)}
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

      <ModalEditDepart id={currentID} setShow={setShow} show={show} />

      <Modal show={showAdd} onHide={handleCloseAdd} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Jabatan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInputNama"
            label="Nama Jabatan"
            className="mb-3"
          >
            <Form.Control
              onChange={onChange}
              name="nama_jabatan"
              type="text"
              value={state.nama_jabatan}
              placeholder="name@example.com"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Tambah
          </Button>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Hapus Jabatan */}
      <Modal show={showDelete} onHide={handleCloseDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Peringatan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Data yang sudah dihapus tidak dapat dipulihkan. Anda yakin?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => deleteOldDepart(idDelete)}>
            Hapus
          </Button>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContentDepartTable;
