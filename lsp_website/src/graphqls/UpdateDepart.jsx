import { gql } from "@apollo/client";

const UpdateDepart = gql`
  mutation UpdateDepart($id_jabatan: Int!, $nama_jabatan: String) {
    update_jabatan_by_pk(
      pk_columns: { id_jabatan: $id_jabatan }
      _set: { nama_jabatan: $nama_jabatan }
    ) {
      id_jabatan
      nama_jabatan
    }
  }
`;

export default UpdateDepart;
