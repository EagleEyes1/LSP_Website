import { gql } from "@apollo/client";

const DeleteSalary = gql`
  mutation DeleteSalary($id_gaji: String!) {
    delete_gaji_by_pk(id_gaji: $id_gaji) {
      id_gaji
      karyawan_id
      gaji_pokok
      gaji_akhir
      tgl_gaji
    }
  }
`;

export default DeleteSalary;
