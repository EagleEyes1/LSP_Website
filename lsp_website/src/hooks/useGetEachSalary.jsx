import { useQuery } from "@apollo/client";
import GetEachSalary from "../graphqls/GetEachSalary";

const useGetEachSalary = (id_gaji) => {
  //   console.log(id_gaji);
  const {
    data: eachData,
    loading: eachLoading,
    error: eachError,
  } = useQuery(GetEachSalary, {
    variables: {
      id_gaji,
    },
  });
  console.log(eachData);
  return { eachData, eachLoading, eachError };
};

export default useGetEachSalary;
