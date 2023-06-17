import { gql } from "@apollo/client";

const InsertEmployee = gql`
  mutation InsertEmployee(
    $nama: String
    $alamat: String
    $no_telp: String
    $jabatan: String
    $id_karyawan: String
  ) {
    insert_karyawan(
      objects: {
        nama: $nama
        alamat: $alamat
        no_telp: $no_telp
        jabatan: $jabatan
        id_karyawan: $id_karyawan
      }
    ) {
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

export default InsertEmployee;
