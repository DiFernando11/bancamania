const baseAuthCredentials = `auth/credentials`;

export const apiRoutesAuthCredentials = {
  registerCredentials: `${baseAuthCredentials}/register`,
  validateCodeCredentials: `${baseAuthCredentials}/sendCode`,
  loginCredentials: `${baseAuthCredentials}/login`,
};
