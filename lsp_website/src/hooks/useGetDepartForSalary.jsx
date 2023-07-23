import { useQuery } from "@apollo/client";
import GetDepartForSalary from "../graphqls/GetDepartForSalary";

const useGetDepartForSalary = (id_karyawan) => {
  const {
    data: departSalaryData,
    loading: departSalaryLoading,
    error: departSalaryError,
  } = useQuery(GetDepartForSalary, {
    variables: {
      karyawan_id: id_karyawan,
    },
  });
  return { departSalaryData, departSalaryLoading, departSalaryError };
};

export default useGetDepartForSalary;
