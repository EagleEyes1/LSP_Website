import { useMutation } from "@apollo/client";
import UpdateSalary from "../graphqls/UpdateSalary";

const useUpdateSalary = () => {
  const [
    updateNewSalary,
    { loading: updateSalaryLoading, error: updateSalaryError },
  ] = useMutation(UpdateSalary);
  return { updateNewSalary, updateSalaryLoading, updateSalaryError };
};

export default useUpdateSalary;
