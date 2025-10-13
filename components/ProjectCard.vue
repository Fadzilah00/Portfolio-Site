<template>
  <div class="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <!-- Project Image -->
    <div class="relative overflow-hidden h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
          {{ getProjectIcon() }}
        </div>
      </div>
      
      <!-- Hover Overlay -->
      <div class="absolute inset-0 bg-primary-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div class="flex space-x-4">
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-200"
            aria-label="View live project"
          >
            <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-200"
            aria-label="View source code"
          >
            <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Category Badge -->
      <div class="absolute top-4 left-4">
        <span class="px-3 py-1 text-xs font-medium rounded-full" :class="getCategoryBadgeClass()">
          {{ getCategoryLabel() }}
        </span>
      </div>
      
      <!-- Featured Badge -->
      <div v-if="project.featured" class="absolute top-4 right-4">
        <span class="px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded-full">
          ⭐ Featured
        </span>
      </div>
    </div>

    <!-- Project Content -->
    <div class="p-6">
      <h3 class="text-xl font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
        {{ project.title }}
      </h3>
      
      <p class="text-neutral-600 dark:text-neutral-400 mb-4 text-sm leading-relaxed">
        {{ project.description }}
      </p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in project.techStack.slice(0, 4)"
          :key="tech"
          class="px-2 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded-md"
        >
          {{ tech }}
        </span>
        <span
          v-if="project.techStack.length > 4"
          class="px-2 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded-md"
        >
          +{{ project.techStack.length - 4 }}
        </span>
      </div>

      <!-- Project Links -->
      <div class="flex space-x-3">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 btn-outline text-center text-sm py-2"
        >
          View Live
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 btn-primary text-center text-sm py-2"
        >
          View Code
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const getCategoryLabel = () => {
  const labels = {
    'ui-ux': 'UI/UX',
    'testing': 'Testing',
    'development': 'Development'
  }
  return labels[props.project.category] || props.project.category
}

const getCategoryBadgeClass = () => {
  const classes = {
    'ui-ux': 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400',
    'testing': 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-400',
    'development': 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400'
  }
  return classes[props.project.category] || 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400'
}

const getProjectIcon = () => {
  const icons = {
    'ui-ux': '🎨',
    'testing': '🧪',
    'development': '💻'
  }
  return icons[props.project.category] || '📁'
}
</script>
