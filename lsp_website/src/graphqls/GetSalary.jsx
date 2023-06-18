import { gql } from "@apollo/client";

const GetSalary = gql`
  subscription GetSalary {
    gaji {
      id_gaji
      karyawan_id
      gaji_pokok
      gaji_akhir
      tgl_gaji
      gaji_karyawan {
        nama
        jabatan
      }
    }
  }
`;

export default GetSalary;
