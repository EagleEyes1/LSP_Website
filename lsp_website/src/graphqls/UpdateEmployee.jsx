import { gql } from "@apollo/client";

const UpdateEmployee = gql`
  mutation UpdateEmployee(
    $id_karyawan: String!
    $nama: String
    $alamat: String
    $no_telp: String
    $jabatan: String
  ) {
    update_karyawan_by_pk(
      pk_columns: { id_karyawan: $id_karyawan }
      _set: {
        nama: $nama
        alamat: $alamat
        no_telp: $no_telp
        jabatan: $jabatan
      }
    ) {
      id_karyawan
      nama
      alamat
      no_telp
      jabatan
    }
  }
`;

export default UpdateEmployee;
