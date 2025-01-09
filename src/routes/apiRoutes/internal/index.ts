const baseApiInternal = `/api`
const baseApiIntAuth = `${baseApiInternal}/auth`

export const apiRoutesInternalAuth = {
  internas: {
    internalLanguage: `${baseApiInternal}/language`,
    internalLogin: `${baseApiIntAuth}/authentication`,
    internalLogout: `${baseApiIntAuth}/logout`,
    internalRefreshToken: `${baseApiIntAuth}/refreshToken`,
  },
}
