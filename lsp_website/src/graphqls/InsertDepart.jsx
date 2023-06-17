import { gql } from "@apollo/client";

const InsertDepart = gql`
  mutation InsertDepart($nama_jabatan: String, $bonus: Float, $pph: Float) {
    insert_jabatan(
      objects: { nama_jabatan: $nama_jabatan, bonus: $bonus, pph: $pph }
    ) {
      returning {
        id_jabatan
        nama_jabatan
        bonus
        pph
      }
    }
  }
`;

export default InsertDepart;
