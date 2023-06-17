import { gql } from "@apollo/client";

const DeleteDepart = gql`
  mutation DeleteDepart($id_jabatan: Int!) {
    delete_jabatan_by_pk(id_jabatan: $id_jabatan) {
      id_jabatan
      nama_jabatan
    }
  }
`;

export default DeleteDepart;
