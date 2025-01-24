;(() => {
  const root = document.documentElement
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const storedTheme = localStorage.getItem('theme')

  if (storedTheme) {
    root.classList.toggle('dark', storedTheme === 'dark')
  } else {
    root.classList.toggle('dark', prefersDark)
  }

  window.getCurrentTheme = () => {
    return root.classList.contains('dark') ? 'dark' : 'light'
  }

  window.toggleTheme = () => {
    const isDark = root.classList.contains('dark')
    root.classList.toggle('dark', !isDark)
    localStorage.setItem('theme', !isDark ? 'dark' : 'light')

    window.currentTheme = !isDark ? 'dark' : 'light'
  }

  window.currentTheme = window.getCurrentTheme()
})()
