import {useContext} from "react";
import {AuthContext, AuthFnsContext} from "./AuthContext"

export function useSignOut() {
  const {signOut} = useContext(AuthFnsContext)
  return signOut
}

export function useToken() {
  const {token} = useContext(AuthContext)
  return token
}

export function useUser() {
  const {user} = useContext(AuthContext)
  return user
}
