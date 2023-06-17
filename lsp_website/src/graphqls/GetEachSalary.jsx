import { gql } from "@apollo/client";

const GetEachSalary = gql`
  query GetEachSalary($id_gaji: String!) {
    gaji_by_pk(id_gaji: $id_gaji) {
      id_gaji
      karyawan_id
      gaji_pokok
      gaji_akhir
      tgl_gaji
    }
  }
`;

export default GetEachSalary;
