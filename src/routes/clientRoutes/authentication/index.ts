const baseLogin = '/login'
const baseRegister = '/register'
const baseLoginPhone = `${baseLogin}/phone`
const baseLoginCredentials = `${baseLogin}/credentials`
const baseRegisterCredentials = `${baseRegister}/credentials`

export const routesAuth = {
  login: baseLogin,
  loginCredentials: baseLoginCredentials,
  loginPhone: baseLoginPhone,
  loginValidateCode: `${baseLoginPhone}/validateCode`,
  register: baseRegister,
  registerCredentials: baseRegisterCredentials,
  registerCredentialsConfirmCode: `${baseRegisterCredentials}/confirmCode`,
  registerCredentialsSendCode: `${baseRegisterCredentials}/sendCode`,
  verificationCode: `${baseLoginPhone}/verifyCode`,
  verifyGoogle: `${baseLogin}/verifyGoogle`,
}
