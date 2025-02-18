import { NormalizeNameProps } from './types'

export const normalizeName = ({
  firstName,
  lastName,
  maxLength = 15,
}: NormalizeNameProps) => {
  if (!firstName || !lastName) return ''

  const first = firstName.split(' ')[0]
  const lastParts = lastName.split(' ')
  const last1 = lastParts[0]
  const last2Initial = lastParts.length > 1 ? lastParts[1][0] + '.' : ''

  let fullName = `${first} ${last1}`
  if (last2Initial) {
    fullName += ` ${last2Initial}`
  }

  if (first.length + last1.length > maxLength) {
    return `${first} ${last1[0]}.`
  }

  return fullName
}
