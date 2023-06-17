import { gql } from "@apollo/client";

const GetSalary = gql`
  subscription GetSalary {
    gaji {
      id_gaji
      karyawan_id
      gaji_pokok
      bonus
      pph
      gaji_akhir
      tgl_gaji
    }
  }
`;

export default GetSalary;
