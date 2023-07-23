import { gql } from "@apollo/client";

const GetDepartForSalary = gql`
  query GetDepartForSalary($karyawan_id: String) {
    jabatan(
      where: { jabatan_karyawans: { id_karyawan: { _eq: $karyawan_id } } }
    ) {
      nama_jabatan
      bonus
      pph
      jabatan_karyawans {
        nama
      }
    }
  }
`;

export default GetDepartForSalary;
