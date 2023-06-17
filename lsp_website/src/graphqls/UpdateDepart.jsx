import { gql } from "@apollo/client";

const UpdateDepart = gql`
  mutation UpdateDepart(
    $id_jabatan: Int!
    $nama_jabatan: String
    $bonus: Float
    $pph: Float
  ) {
    update_jabatan_by_pk(
      pk_columns: { id_jabatan: $id_jabatan }
      _set: { nama_jabatan: $nama_jabatan, bonus: $bonus, pph: $pph }
    ) {
      id_jabatan
      nama_jabatan
      bonus
      pph
    }
  }
`;

export default UpdateDepart;
