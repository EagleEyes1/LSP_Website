import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import useGetEmployee from "../../hooks/useGetEmployee";
import Loading from "../../assets/loadingsvg/Loading";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import ModalEditEmployee from "../ModalEditEmployee/ModalEditEmployee";
import useInsertEmployee from "../../hooks/useInsertEmployee";
import Modal from "react-bootstrap/Modal";
import useDeleteEmployee from "../../hooks/useDeleteEmployee";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";
import useGetDepart from "../../hooks/useGetDepart";

function ContentTable() {
  const [state, setState] = useState({
    id_karyawan: "",
    nama: "",
    alamat: "",
    no_telp: "",
    jabatan: "",
  });

  const { employeeData, employeeLoading, employeeError } = useGetEmployee();

  const { insertNewEmployee, insertEmployeeLoading, insertEmployeeError } =
    useInsertEmployee();

  const { deleteEmployeeLoading, deleteEmployeeById } = useDeleteEmployee();

  // Ambil ID Edit
  const [currentID, setCurrentID] = useState("");

  // Ambil ID Delete
  const [idDelete, setidDelete] = useState("");

  // State Modal Edit
  const [show, setShow] = useState(false);

  const handleShow = (e, id) => {
    setShow(true);
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
  const handleShowDelete = (id) => {
    setShowDelete(!showDelete);
    setidDelete(id);
  };

  const { departData, departLoading, departError } = useGetDepart();

  const deleteOldEmployee = (idx) => {
    deleteEmployeeById({
      variables: {
        id_karyawan: idx,
      },
    });
    handleCloseDelete();
    Swal.fire("Berhasil!", "Data Berhasil Dihapus", "success");
  };

  if (
    employeeLoading ||
    departLoading ||
    deleteEmployeeLoading ||
    insertEmployeeLoading
  ) {
    return <Loading />;
  }

  if (employeeError || departError || insertEmployeeError) {
    console.log(employeeError || departError || insertEmployeeError);
  }

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const addEmployee = (newEmployee) => {
    const newData = {
      ...newEmployee,
    };
    insertNewEmployee({
      variables: {
        id_karyawan: newData.id_karyawan,
        nama: newData.nama,
        alamat: newData.alamat,
        no_telp: newData.no_telp,
        jabatan: newData.jabatan,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.nama && state.alamat && state.no_telp && state.jabatan) {
      const newData = {
        id_karyawan: uuidv4(),
        nama: state.nama,
        alamat: state.alamat,
        no_telp: state.no_telp,
        jabatan: state.jabatan,
      };
      addEmployee(newData);
      setState({
        id_karyawan: "",
        nama: "",
        alamat: "",
        no_telp: "",
        jabatan: "",
      });
      Swal.fire("Berhasil!", "Data Berhasil Ditambahkan", "success");
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>No. Telepon</th>
              <th>Jabatan</th>
              <th style={{ textAlign: "center" }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {employeeData?.karyawan.map((item, index) => (
              <tr key={item.id_karyawan}>
                <td>{index + 1}</td>
                <td>{item.nama}</td>
                <td>{item.alamat}</td>
                <td>{item.no_telp}</td>
                <td>{item.jabatan}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    variant="secondary"
                    onClick={(e) => handleShow(e, item.id_karyawan)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                    Edit
                  </Button>{" "}
                  <Button
                    onClick={() => handleShowDelete(item.id_karyawan)}
                    variant="danger"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                    Hapus
                  </Button>{" "}
                  <Button
                    href={`/detailgaji/${item.id_karyawan}`}
                    data={item.nama}
                    variant="warning"
                  >
                    <FontAwesomeIcon icon={faMoneyBill} />
                    Gaji
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modal Edit Employee  */}
      <ModalEditEmployee id={currentID} setShow={setShow} show={show} />

      {/* Modal Tambahkan Karyawan */}
      <Modal show={showAdd} onHide={handleCloseAdd} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Data Karyawan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInputNama"
            label="Nama"
            className="mb-3"
          >
            <Form.Control
              onChange={onChange}
              name="nama"
              type="text"
              value={state.nama}
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputNama"
            label="Alamat"
            className="mb-3"
          >
            <Form.Control
              onChange={onChange}
              name="alamat"
              type="text"
              value={state.alamat}
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputNama"
            label="No. Telepon"
            className="mb-3"
          >
            <Form.Control
              onChange={onChange}
              name="no_telp"
              value={state.no_telp}
              type="text"
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <Form.Select
            name="jabatan"
            onChange={onChange}
            aria-label="Default select example"
            value={state.jabatan}
          >
            <option value="" selected>
              Pilih Jabatan
            </option>
            {departData?.jabatan.map((item) => (
              <option value={`${item.nama_jabatan}`}>
                {item.nama_jabatan}
              </option>
            ))}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Tutup
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Tambahkan
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Hapus Karyawan */}
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
          <Button variant="danger" onClick={() => deleteOldEmployee(idDelete)}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default ContentTable;
