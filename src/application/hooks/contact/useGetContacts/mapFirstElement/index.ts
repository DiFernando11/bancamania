import { ContactData, ContactDataMap } from '@/shared'

export const mapFirstElement = (contacts: ContactData[]): ContactDataMap[] => {
  let lastLetter = ''

  return contacts.map(contact => {
    const firstLetter = contact.alias.charAt(0).toUpperCase()
    const isFirstElement = firstLetter !== lastLetter
    lastLetter = firstLetter

    return { ...contact, isFirstElement }
  })
}
