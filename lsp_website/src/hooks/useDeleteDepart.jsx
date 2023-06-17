import { useMutation } from "@apollo/client";
import DeleteDepart from "../graphqls/DeleteDepart";

const useDeleteDepart = () => {
  const [deleteDepartById, { loading: deleteDepartLoading }] =
    useMutation(DeleteDepart);
  return { deleteDepartLoading, deleteDepartById };
};

export default useDeleteDepart;
