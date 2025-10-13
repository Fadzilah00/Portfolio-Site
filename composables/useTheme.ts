export function useTheme() {
  const isDark = ref(false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    // Update document class for Tailwind dark mode
    if (process.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }
  }

  // Initialize theme from localStorage or system preference
  onMounted(() => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      if (savedTheme) {
        isDark.value = savedTheme === 'dark'
      } else {
        isDark.value = prefersDark
      }
      
      // Apply theme to document
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  })

  return {
    isDark,
    toggleTheme,
  }
}