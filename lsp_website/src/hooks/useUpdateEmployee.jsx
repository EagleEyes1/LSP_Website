import { useMutation } from "@apollo/client";
import UpdateEmployee from "../graphqls/UpdateEmployee";

const useUpdateEmployee = () => {
  const [
    updateNewEmployee,
    { loading: updateEmployeeLoading, error: updateEmployeeError },
  ] = useMutation(UpdateEmployee);
  return { updateNewEmployee, updateEmployeeLoading, updateEmployeeError };
};

export default useUpdateEmployee;
