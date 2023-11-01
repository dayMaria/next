import {Typography} from "@mui/material"
import {Suspense} from "react"

import _roles from "../../constants/roles";
import {useUser} from "../../config/Oidc"
import ErrorBoundary from "../ErrorBoundary";
import Spinner from "../Spinner"

const PageContainer = ({ children, page, roles }) => {
  const user = useUser()

  const haveAccess = !roles
    || user.roles.some(r => roles.some(role => role === r))
    || user.roles.some(r => r === _roles.ADMIN);

  return (
    <>
      {page && (
        <div className="mb-3">
          <Typography className="border-b-2 border-gray-100" variant="h5">{page}</Typography>
        </div>
      )}
      {haveAccess ? (
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            {children}
          </Suspense>
        </ErrorBoundary>
      ) : (
        <Typography color="error" variant="body1">
          Usted no tiene acceso a esta funcionalidad
        </Typography>
      )}
    </>
  )
}

export default PageContainer
