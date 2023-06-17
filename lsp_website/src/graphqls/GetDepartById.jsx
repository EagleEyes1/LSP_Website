import { gql } from "@apollo/client";

const GetDepartById = gql`
  query GetDepartById($id_jabatan: Int!) {
    jabatan_by_pk(id_jabatan: $id_jabatan) {
      id_jabatan
      nama_jabatan
      bonus
      pph
    }
  }
`;

export default GetDepartById;
