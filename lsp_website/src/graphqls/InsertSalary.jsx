import { gql } from "@apollo/client";

const InsertSalary = gql`
  mutation InsertSalary(
    $id_gaji: String
    $karyawan_id: String
    $gaji_pokok: Int
    $gaji_akhir: Int
    $tgl_gaji: date
  ) {
    insert_gaji(
      objects: {
        id_gaji: $id_gaji
        karyawan_id: $karyawan_id
        gaji_pokok: $gaji_pokok
        gaji_akhir: $gaji_akhir
        tgl_gaji: $tgl_gaji
      }
    ) {
      returning {
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
  }
`;

export default InsertSalary;
