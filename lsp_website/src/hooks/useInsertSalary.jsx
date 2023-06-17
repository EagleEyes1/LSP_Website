import { useMutation } from "@apollo/client";
import InsertSalary from "../graphqls/InsertSalary";

const useInsertSalary = () => {
  const [
    insertNewSalary,
    { loading: insertSalaryLoading, error: insertSalaryError },
  ] = useMutation(InsertSalary);
  return { insertNewSalary, insertSalaryLoading, insertSalaryError };
};

export default useInsertSalary;
