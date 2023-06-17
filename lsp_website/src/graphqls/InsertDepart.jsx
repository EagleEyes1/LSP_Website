import { gql } from "@apollo/client";

const InsertDepart = gql`
  mutation InsertDepart($nama_jabatan: String) {
    insert_jabatan(objects: { nama_jabatan: $nama_jabatan }) {
      returning {
        id_jabatan
        nama_jabatan
      }
    }
  }
`;

export default InsertDepart;
