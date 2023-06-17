import { useMutation } from "@apollo/client";
import InsertEmployee from "../graphqls/InsertEmployee";

const useInsertEmployee = () => {
  const [
    insertNewEmployee,
    { loading: insertEmployeeLoading, error: insertEmployeeError },
  ] = useMutation(InsertEmployee);
  return { insertNewEmployee, insertEmployeeLoading, insertEmployeeError };
};

export default useInsertEmployee;
