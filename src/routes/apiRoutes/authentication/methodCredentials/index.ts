const baseAuthCredentials = `auth/credentials`

export const apiRoutesAuthCredentials = {
  loginCredentials: `${baseAuthCredentials}/login`,
  registerCredentials: `${baseAuthCredentials}/register`,
  validateCodeCredentials: `${baseAuthCredentials}/sendCode`,
}
