import { useSubscription } from "@apollo/client";
import GetDepart from "../graphqls/GetDepart";

const useGetDepart = () => {
  const {
    data: departData,
    loading: departLoading,
    error: departError,
  } = useSubscription(GetDepart);
  return { departData, departLoading, departError };
};

export default useGetDepart;
