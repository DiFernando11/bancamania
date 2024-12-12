const baseAuthPhone = `/auth/phone`
const baseAutGoogle = `/auth/google/register`

export const apiRoutesAuthPhone = {
  sendCodePhone: `${baseAuthPhone}/sendCode`,
  validateCodePhone: `${baseAuthPhone}/validateCode`,
  registerPhone: `${baseAuthPhone}/register`,
  loginPhone: `${baseAuthPhone}/login`,
  authGoogle: baseAutGoogle,
}
