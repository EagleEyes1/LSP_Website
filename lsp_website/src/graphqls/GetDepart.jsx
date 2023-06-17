import { gql } from "@apollo/client";

const GetDepart = gql`
  subscription GetDepart {
    jabatan {
      id_jabatan
      nama_jabatan
      bonus
      pph
    }
  }
`;

export default GetDepart;
