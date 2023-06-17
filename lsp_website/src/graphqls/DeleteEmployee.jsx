import { gql } from "@apollo/client";

const DeleteEmployee = gql`
  mutation DeleteEmployee($id_karyawan: String) {
    delete_karyawan(where: { id_karyawan: { _eq: $id_karyawan } }) {
      returning {
        id_karyawan
        nama
        alamat
        no_telp
        jabatan
      }
    }
  }
`;

export default DeleteEmployee;
