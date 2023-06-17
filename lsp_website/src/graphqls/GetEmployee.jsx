import { gql } from "@apollo/client";

const GetEmployee = gql`
  subscription GetEmployee {
    karyawan {
      id_karyawan
      nama
      alamat
      no_telp
      jabatan
    }
  }
`;

export default GetEmployee;
