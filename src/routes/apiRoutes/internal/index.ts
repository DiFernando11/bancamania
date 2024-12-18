const baseApiInternal = `/api`
const baseApiIntAuth = `${baseApiInternal}/auth`

export const apiRoutesInternalAuth = {
  internas: {
    internalLogin: `${baseApiIntAuth}/authentication`,
    internalLogout: `${baseApiIntAuth}/logout`,
  },
}
