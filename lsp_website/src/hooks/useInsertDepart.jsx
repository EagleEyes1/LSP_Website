import { useMutation } from "@apollo/client";
import InsertDepart from "../graphqls/InsertDepart";

const useInsertDepart = () => {
  const [
    insertNewDepart,
    { loading: insertDepartLoading, error: insertDepartError },
  ] = useMutation(InsertDepart);
  return { insertNewDepart, insertDepartLoading, insertDepartError };
};

export default useInsertDepart;
