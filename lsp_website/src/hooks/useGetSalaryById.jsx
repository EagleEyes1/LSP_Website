import { useSubscription } from "@apollo/client";
import GetSalaryById from "../graphqls/GetSalaryById";

const useGetSalaryById = (karyawan_id) => {
  const {
    data: idSalaryData,
    loading: idSalaryLoading,
    error: idSalaryError,
  } = useSubscription(GetSalaryById, {
    variables: {
      id_karyawan: karyawan_id,
    },
  });
  return { idSalaryData, idSalaryLoading, idSalaryError };
};

export default useGetSalaryById;
