import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Loading from "../../assets/loadingsvg/Loading";
import Button from "react-bootstrap/Button";
import useGetEachSalary from "../../hooks/useGetEachSalary";
import useUpdateSalary from "../../hooks/useUpdateSalary";
import { useParams } from "react-router-dom";
import useGetDepartForSalary from "../../hooks/useGetDepartForSalary";
// import useGetEmployeeById from "../../hooks/useGetEmployeeById";
// import useUpdateEmployee from "../../hooks/useUpdateEmployee";
// import useGetDepart from "../../hooks/useGetDepart";

function ModalEditSalary({ id, id_params, setShow, show }) {
  const handleClose = () => {
    setShow(!show);
  };

  // const { idx } = useParams();
  // console.log(idx);
  //   console.log(id);

  const { eachData, eachLoading, eachError } = useGetEachSalary(id);

  console.log(eachData);

  const [state, setState] = useState({
    id_gaji: "",
    karyawan_id: "",
    gaji_pokok: 0,
    gaji_akhir: 0,
    tgl_gaji: "",
  });

  const { updateNewSalary, updateSalaryLoading, updateSalaryError } =
    useUpdateSalary();

  //   const { departData, departLoading, departError } = useGetDepart();
  const { departSalaryData, departSalaryLoading, departSalaryError } =
    useGetDepartForSalary(id_params);

  console.log(departSalaryData);

  const gaji_bonus =
    Number(eachData?.gaji_by_pk?.gaji_pokok) *
    Number(departSalaryData?.gaji[0]?.gaji_karyawan?.karyawan_jabatan?.bonus);
  const gaji_pph =
    Number(eachData?.gaji_by_pk?.gaji_pokok) *
    Number(departSalaryData?.gaji[0]?.gaji_karyawan?.karyawan_jabatan?.pph);

  const updateSalary = () => {
    console.log(state);
    updateNewSalary({
      variables: {
        id_gaji: id,
        karyawan_id: state.karyawan_id,
        gaji_pokok: state.gaji_pokok,
        gaji_akhir: Number(state.gaji_pokok) + gaji_bonus - gaji_pph,
        tgl_gaji: state.tgl_gaji,
      },
    });
    handleClose();
  };

  if (eachLoading || state.nama === undefined || updateSalaryLoading) {
    <Loading />;
  }

  if (eachError || updateSalaryError) {
    console.log(eachError);
  }

  console.log(state);
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setState({
      karyawan_id: eachData?.gaji_by_pk?.karyawan_id,
      gaji_pokok: eachData?.gaji_by_pk?.gaji_pokok,
      gaji_akhir: eachData?.gaji_by_pk?.gaji_akhir,
      tgl_gaji: eachData?.gaji_by_pk?.tgl_gaji,
    });
  }, [id, eachData]);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Gaji Karyawan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Gaji Pokok</Form.Label>
          <Form.Control
            name="gaji_pokok"
            type="text"
            onChange={onChange}
            value={state.gaji_pokok}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tanggal Gaji</Form.Label>
          <Form.Control
            name="tgl_gaji"
            type="date"
            onChange={onChange}
            value={state.tgl_gaji}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={updateSalary}>
          Edit
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Tutup
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditSalary;
