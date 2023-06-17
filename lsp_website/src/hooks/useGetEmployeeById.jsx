import { useQuery } from "@apollo/client";
import GetEmployeeById from "../graphqls/GetEmployeeById";

const useGetEmployeeById = (id_karyawan) => {
  const {
    data: idEmployeeData,
    loading: idEmployeeLoading,
    error: idEmployeeError,
  } = useQuery(GetEmployeeById, {
    variables: {
      id_karyawan,
    },
  });
  return { idEmployeeData, idEmployeeLoading, idEmployeeError };
};

export default useGetEmployeeById;
