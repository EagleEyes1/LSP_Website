import { gql } from "@apollo/client";

const UpdateSalary = gql`
  mutation UpdateSalary(
    $id_gaji: String!
    $gaji_pokok: Int
    $gaji_akhir: Int
    $karyawan_id: String
    $tgl_gaji: date
  ) {
    update_gaji_by_pk(
      pk_columns: { id_gaji: $id_gaji }
      _set: {
        gaji_pokok: $gaji_pokok
        gaji_akhir: $gaji_akhir
        karyawan_id: $karyawan_id
        tgl_gaji: $tgl_gaji
      }
    ) {
      id_gaji
      karyawan_id
      gaji_pokok
      gaji_akhir
      tgl_gaji
    }
  }
`;

export default UpdateSalary;
