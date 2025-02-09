const baseApiInternal = `/api`
const baseApiIntAuth = `${baseApiInternal}/auth`
const baseApiLanguage = `${baseApiInternal}/language`

export const apiRoutesInternalAuth = {
  internas: {
    internalChangeLanguage: `${baseApiLanguage}/changeLanguage`,
    internalLogin: `${baseApiIntAuth}/authentication`,
    internalLogout: `${baseApiIntAuth}/logout`,
    internalRefreshToken: `${baseApiIntAuth}/refreshToken`,
  },
}
