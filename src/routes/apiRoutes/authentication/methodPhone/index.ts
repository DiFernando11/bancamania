const baseAuthPhone = `/auth/phone`
const baseAutGoogle = `/auth/google/register`

export const apiRoutesAuthPhone = {
  authGoogle: baseAutGoogle,
  loginPhone: `${baseAuthPhone}/login`,
  registerPhone: `${baseAuthPhone}/register`,
  sendCodePhone: `${baseAuthPhone}/sendCode`,
  validateCodePhone: `${baseAuthPhone}/validateCode`,
}
