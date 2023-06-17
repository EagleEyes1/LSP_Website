import { useMutation } from "@apollo/client";
import DeleteEmployee from "../graphqls/DeleteEmployee";

const useDeleteEmployee = () => {
  const [deleteEmployeeById, { loading: deleteEmployeeLoading }] =
    useMutation(DeleteEmployee);
  return { deleteEmployeeLoading, deleteEmployeeById };
};

export default useDeleteEmployee;
