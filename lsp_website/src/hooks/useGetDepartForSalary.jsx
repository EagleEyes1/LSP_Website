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
      id_karyawan: karyawan_id,
    },
  });
  console.log(departSalaryData);
  return { departSalaryData, departSalaryLoading, departSalaryError };
};

export default useGetDepartForSalary;
