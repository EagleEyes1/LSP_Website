import { useSubscription } from "@apollo/client";
import GetSalary from "../graphqls/GetSalary";

const useGetSalary = () => {
  const {
    data: salaryData,
    loading: salaryLoading,
    error: salaryError,
  } = useSubscription(GetSalary);
  return { salaryData, salaryLoading, salaryError };
};

export default useGetSalary;
