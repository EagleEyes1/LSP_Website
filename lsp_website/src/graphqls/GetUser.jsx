import { gql } from "@apollo/client"

const GetUser = gql`
query MyQuery($mail: String, $password: String) {
    user(where: {mail: {_eq: $mail}, _and: {password: {_eq: $password}}}) {
      id_user
      mail
      display_name
    }
  }  
`

export default GetUser