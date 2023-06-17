import { gql } from "@apollo/client";

const GetDepartForSalary = gql`
  query GetDepartForSalary($id_karyawan: String) {
    gaji(where: { karyawan_id: { _eq: $id_karyawan } }) {
      gaji_karyawan {
        karyawan_jabatan {
          id_jabatan
          nama_jabatan
          bonus
          pph
        }
      }
    }
  }
`;

export default GetDepartForSalary;
