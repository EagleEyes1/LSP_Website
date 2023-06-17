import { gql } from "@apollo/client";

const GetSalaryById = gql`
  subscription GetSalaryById($id_karyawan: String) {
    gaji(where: { karyawan_id: { _eq: $id_karyawan } }) {
      id_gaji
      karyawan_id
      gaji_pokok
      gaji_akhir
      tgl_gaji
      gaji_karyawan {
        nama
      }
    }
  }
`;

export default GetSalaryById;
