import { useQuery } from "@apollo/client";
import GetDepartById from "../graphqls/GetDepartById";

const useGetDepartById = (id_jabatan) => {
  const {
    data: idDepartData,
    loading: idDepartLoading,
    error: idDepartError,
  } = useQuery(GetDepartById, {
    variables: {
      id_jabatan,
    },
  });
  return { idDepartData, idDepartLoading, idDepartError };
};

export default useGetDepartById;
