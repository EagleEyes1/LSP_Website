import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Loading from "../../assets/loadingsvg/Loading";
import Button from "react-bootstrap/Button";
import useUpdateDepart from "../../hooks/useUpdateDepart";
import useGetDepartById from "../../hooks/useGetDepartById";

function ModalEditDepart({ id, setShow, show }) {
  const [state, setState] = useState({
    nama_jabatan: "",
  });

  const handleClose = () => {
    setShow(!show);
  };

  const { idDepartData, idDepartLoading, idDepartError } = useGetDepartById(id);

  const { updateNewDepart, updateDepartLoading, updateDepartError } =
    useUpdateDepart();

  const updateDepart = () => {
    updateNewDepart({
      variables: {
        id_jabatan: id,
        nama_jabatan: state.nama_jabatan,
      },
    });
    handleClose();
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setState({
      nama_jabatan: idDepartData?.jabatan_by_pk?.nama_jabatan,
    });
  }, [id, idDepartData]);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Jabatan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nama Jabatan</Form.Label>
          <Form.Control
            name="nama_jabatan"
            type="text"
            onChange={onChange}
            value={state.nama_jabatan}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={updateDepart}>
          Edit
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Tutup
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditDepart;
