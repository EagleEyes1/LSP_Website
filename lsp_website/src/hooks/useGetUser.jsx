import { useLazyQuery } from "@apollo/client";
import GetUser from "../graphqls/GetUser";

const useGetUser = () => {
    const [validateUser, { data: userData, loading: userLoading, error: userError }] = useLazyQuery(GetUser)
    return { validateUser, userData, userLoading, userError }
}

export default useGetUser