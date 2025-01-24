declare global {
  interface Window {
    toggleTheme: () => void
    currentTheme: 'dark' | 'light'
  }
}

export {}
