import { useMutation } from "@apollo/client";
import UpdateDepart from "../graphqls/UpdateDepart";

const useUpdateDepart = () => {
  const [
    updateNewDepart,
    { loading: updateDepartLoading, error: updateDepartError },
  ] = useMutation(UpdateDepart);
  return { updateNewDepart, updateDepartLoading, updateDepartError };
};

export default useUpdateDepart;
