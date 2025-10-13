<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/95 via-blue-50/95 to-purple-50/95 dark:from-neutral-900/95 dark:via-blue-900/95 dark:to-purple-900/95 backdrop-blur-xl border-b border-gradient-to-r from-blue-200/50 via-purple-200/50 to-pink-200/50 dark:from-blue-700/50 dark:via-purple-700/50 dark:to-pink-700/50 shadow-2xl" style="position: fixed !important; top: 0 !important; left: 0 !important; right: 0 !important; z-index: 50 !important;">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
    
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 group">
          <a href="#home" class="text-2xl font-bold text-purple-600 hover:text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg">
            <span class="relative">
              Aina
              <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
            </span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-6">
            <a v-for="item in navigation" :key="item.name" :href="item.href" 
               @click="scrollToSection(item.href)"
               class="group relative text-neutral-600 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 px-4 py-2 rounded-xl text-sm font-medium not-italic transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 dark:hover:from-purple-900/30 dark:hover:to-blue-900/30 cursor-pointer overflow-hidden">
              <!-- Animated background -->
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <!-- Floating dots -->
              <div class="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
              <span class="relative z-10">{{ item.name }}</span>
            </a>
          </div>
        </div>

        <!-- Theme Toggle & Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <!-- Theme Toggle -->
          <button @click="toggleTheme" 
                  class="group relative p-3 rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 hover:from-purple-200 hover:to-blue-200 dark:hover:from-purple-800/70 dark:hover:to-blue-800/70 transition-all duration-300 hover:scale-110 hover:shadow-lg overflow-hidden">
            <!-- Animated background -->
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg v-if="!isDark" class="w-5 h-5 text-purple-600 group-hover:text-purple-700 group-hover:animate-spin transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg v-else class="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 group-hover:animate-pulse transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>

          <!-- Mobile menu button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" 
                  class="group relative md:hidden p-3 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-800/70 dark:hover:to-pink-800/70 transition-all duration-300 hover:scale-110 hover:shadow-lg overflow-hidden">
            <!-- Animated background -->
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg class="w-6 h-6 text-purple-600 group-hover:text-purple-700 group-hover:rotate-90 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-neutral-800 rounded-lg mt-2 shadow-lg">
          <a v-for="item in navigation" :key="item.name" :href="item.href" 
             @click="scrollToSection(item.href); mobileMenuOpen = false"
             class="text-neutral-600 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer">
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const { isDark, toggleTheme } = useTheme()

const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
]

// Smooth scroll function
const scrollToSection = (href) => {
  if (href === '#home') {
    // Scroll to top of page for home
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } else {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}
</script>