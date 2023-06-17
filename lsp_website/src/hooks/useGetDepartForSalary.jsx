import { useQuery } from "@apollo/client";
import GetDepartForSalary from "../graphqls/GetDepartForSalary";

const useGetDepartForSalary = (karyawan_id) => {
  console.log(karyawan_id);
  const {
    data: departSalaryData,
    loading: departSalaryLoading,
    error: departSalaryError,
  } = useQuery(GetDepartForSalary, {
    variables: {
      karyawan_id,
    },
  });
  return { departSalaryData, departSalaryLoading, departSalaryError };
};

export default useGetDepartForSalary;
