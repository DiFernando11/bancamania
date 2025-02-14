const baseApiInternal = `/api`
const baseApiIntAuth = `${baseApiInternal}/auth`
const baseApiLanguage = `${baseApiInternal}/language`

export const apiRoutesInternalAuth = {
  internas: {
    internalChangeLanguage: `${baseApiLanguage}/changeLanguage`,
    internalDeleteOnBoarding: `${baseApiIntAuth}/deleteOnBoarding`,
    internalLogin: `${baseApiIntAuth}/authentication`,
    internalLogout: `${baseApiIntAuth}/logout`,
    internalOnBoarding: `${baseApiIntAuth}/setOnBoarding`,
    internalRefreshToken: `${baseApiIntAuth}/refreshToken`,
  },
}
