import { useMutation } from "@apollo/client";
import DeleteSalary from "../graphqls/DeleteSalary";

const useDeleteSalary = () => {
  const [deleteSalaryById, { loading: deleteSalaryLoading }] =
    useMutation(DeleteSalary);
  return { deleteSalaryLoading, deleteSalaryById };
};

export default useDeleteSalary;
