import { useSubscription } from "@apollo/client";
import GetEmployee from "../graphqls/GetEmployee";

const useGetEmployee = () => {
  const {
    data: employeeData,
    loading: employeeLoading,
    error: employeeError,
  } = useSubscription(GetEmployee);
  return { employeeData, employeeLoading, employeeError };
};

export default useGetEmployee;
