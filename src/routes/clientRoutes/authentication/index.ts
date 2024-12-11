const baseLogin = "/login";
const baseRegister = "/register";
const baseLoginPhone = `${baseLogin}/phone`;
const baseLoginCredentials = `${baseLogin}/credentials`;
const baseRegisterCredentials = `${baseRegister}/credentials`;

export const publicRoutesAuth = {
  login: baseLogin,
  register: baseRegister,
  loginPhone: baseLoginPhone,
  loginValidateCode: `${baseLoginPhone}/validateCode`,
  loginCredentials: baseLoginCredentials,
  registerCredentials: baseRegisterCredentials,
  registerCredentialsConfirmCode: `${baseRegisterCredentials}/confirmCode`,
  registerCredentialsSendCode: `${baseRegisterCredentials}/sendCode`,
};

export const especialRoutesAuth = {
  verifyGoogle: `${publicRoutesAuth.login}/verifyGoogle`,
  verificationCode: `${baseLoginPhone}/verifyCode`,
};
