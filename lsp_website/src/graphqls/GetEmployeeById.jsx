import { gql } from "@apollo/client";

const GetEmployeeById = gql`
  query GetEmployeeById($id_karyawan: String!) {
    karyawan_by_pk(id_karyawan: $id_karyawan) {
      id_karyawan
      nama
      alamat
      no_telp
      jabatan
    }
  }
`;

export default GetEmployeeById;
