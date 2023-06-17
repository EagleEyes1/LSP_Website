import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Loading from "../../assets/loadingsvg/Loading";
import Button from "react-bootstrap/Button";
import useGetEmployeeById from "../../hooks/useGetEmployeeById";
import useUpdateEmployee from "../../hooks/useUpdateEmployee";
import useGetDepart from "../../hooks/useGetDepart";

function ModalEditEmployee({ id, setShow, show }) {
  const handleClose = () => {
    setShow(!show);
  };

  const { idEmployeeData, idEmployeeLoading, idEmployeeError } =
    useGetEmployeeById(id);

  const [state, setState] = useState({
    nama: "",
    alamat: "",
    no_telp: "",
    jabatan: "",
  });

  const { updateNewEmployee, updateEmployeeLoading, updateEmployeeError } =
    useUpdateEmployee();

  const { departData, departLoading, departError } = useGetDepart();

  const updateEmployee = () => {
    updateNewEmployee({
      variables: {
        id_karyawan: id,
        nama: state.nama,
        alamat: state.alamat,
        no_telp: state.no_telp,
        jabatan: state.jabatan,
      },
    });
    handleClose();
  };

  if (idEmployeeLoading || state.nama === undefined || updateEmployeeLoading) {
    <Loading />;
  }

  if (idEmployeeError || updateEmployeeError) {
    console.log(idEmployeeError);
  }

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setState({
      nama: idEmployeeData?.karyawan_by_pk?.nama,
      alamat: idEmployeeData?.karyawan_by_pk?.alamat,
      no_telp: idEmployeeData?.karyawan_by_pk?.no_telp,
      jabatan: idEmployeeData?.karyawan_by_pk?.jabatan,
    });
  }, [id, idEmployeeData]);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Data Karyawan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nama</Form.Label>
          <Form.Control
            name="nama"
            type="text"
            onChange={onChange}
            value={state.nama}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Alamat</Form.Label>
          <Form.Control
            name="alamat"
            type="text"
            onChange={onChange}
            value={state.alamat}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>No. Telepon</Form.Label>
          <Form.Control
            name="no_telp"
            type="text"
            onChange={onChange}
            value={state.no_telp}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Jabatan</Form.Label>
          <Form.Select
            name="jabatan"
            onChange={onChange}
            value={state.jabatan}
            aria-label="Default select example"
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
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={updateEmployee}>
          Edit
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Tutup
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditEmployee;
