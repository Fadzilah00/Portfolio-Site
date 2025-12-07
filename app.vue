<template>
  <div class="min-h-screen w-full">
    <!-- Header -->
    <Header />
    
    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center section-bg-1 relative overflow-hidden py-8 md:py-12 lg:py-16 section-spacing section-separator pt-16 md:pt-20 lg:pt-24" style="margin-bottom: 6rem;">
      <!-- Clean Animated Background -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Subtle Circle 1 - Light Mode -->
        <div class="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-sky-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-30"></div>
        
        <!-- Subtle Circle 2 - Light Mode -->
        <div class="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-25 animation-delay-2000"></div>
        
        <!-- Subtle Circle 3 - Light Mode -->
        <div class="absolute -bottom-8 left-40 w-96 h-96 bg-gradient-to-r from-cyan-200 to-sky-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-20 animation-delay-4000"></div>
        
        <!-- Center Subtle Circle - Light Mode -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-15 animation-delay-1000"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <!-- Profile Image -->
          <div class="mb-8">
            <div class="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl relative group">
              <img 
                src="/assets/images/BLUE BACKGROUND.jpg" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;"
              />
              <!-- Animated Ring -->
              <div class="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          <!-- Main Heading -->
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-bold text-neutral-900 dark:text-white mb-12 animate-fade-in">
            Hi, I'm 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-pulse">
              Aina
            </span>
          </h1>
          
          <!-- Subtitle -->
          <div class="text-3xl md:text-4xl lg:text-5xl text-neutral-700 dark:text-neutral-300 mb-16 font-medium">
            <span class="inline-block animate-slide-in-left animation-delay-300 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">UI/UX Designer</span>
            <span class="mx-6 text-purple-500 dark:text-purple-400 text-4xl">•</span>
            <span class="inline-block animate-slide-in-left animation-delay-500 bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Software Tester</span>
            <span class="mx-6 text-pink-500 dark:text-pink-400 text-4xl">•</span>
            <span class="inline-block animate-slide-in-left animation-delay-700 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Junior Developer</span>
          </div>
          
          <!-- Description -->
          <p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-1000">
            Passionate about creating exceptional user experiences through thoughtful design, 
            rigorous testing, and clean code. Let's build something amazing together.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-up animation-delay-1200">
            <a href="#portfolio" class="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 transform">
              <span class="flex items-center justify-center">
                View My Work
                <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a href="/resume.pdf" download class="group relative px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-purple-300 text-purple-700 dark:text-purple-300 font-semibold rounded-full shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 transform hover:bg-white/20">
              <span class="flex items-center justify-center">
                Download CV
                <svg class="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-12 md:py-16 lg:py-24 section-spacing section-separator min-h-[80vh]" style="margin-bottom: 6rem; margin-top: 2rem;">

      <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-6xl font-bold mb-8 text-slate-800 dark:text-white">
            About Me
          </h2>
          <p class="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Creative professional with a unique blend of design, testing, and development skills
          </p>
        </div>
        
        <!-- Better Layout: Profile Image First, Then Content -->
        <div class="flex flex-col lg:flex-row gap-16 items-center">
          <!-- Profile Image - Clean and Bigger -->
          <div class="animate-slide-in-right flex-shrink-0">
            <div class="relative group">
              <!-- Main Image Container - Much Bigger -->
              <div class="w-96 h-96 mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-slate-700/20 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105 relative">
                <img 
                  src="/assets/images/newpic.jpg" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;"
                />
                <!-- Enhanced Glow Effect -->
                <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <!-- Animated Border -->
                <div class="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
          
          <!-- Content - Clean -->
          <div class="animate-slide-in-left flex-1">

            <!-- Main Content - Single Card Design -->
            <div class="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20">
              <div class="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                <p class="font-medium">
                  I'm a creative professional with a unique blend of skills in UI/UX design, 
                  software testing, and web development. My journey combines design thinking, 
                  technical implementation, and quality assurance to deliver exceptional digital experiences.
                </p>
                
                <p class="font-medium">
                  With a passion for problem-solving and attention to detail, I approach every 
                  project with curiosity and dedication. I believe in creating user-centered 
                  solutions that not only look beautiful but also function flawlessly.
                </p>
                
                <p class="font-medium">
                  When I'm not coding or designing, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
              
              
              <!-- Download Resume Section -->
              <div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div class="text-center">
                  <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">Ready to learn more about my experience?</p>
                  <a href="/resume.pdf" download class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <svg class="w-4 h-4 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
<section id="portfolio" class="py-12 md:py-16 lg:py-24 section-bg-3 section-spacing section-separator min-h-[80vh]" style="margin-bottom: 6rem; margin-top: 2rem;">
  <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
    <div class="text-center mb-20">
      <h2 class="text-5xl md:text-6xl font-bold mb-8 text-slate-800 dark:text-white">
        My Work
      </h2>
      <p class="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
        A showcase of my projects across UI/UX design, software testing, and web development.
      </p>
    </div>

    <!-- Filter Tabs -->
    <div class="flex flex-wrap justify-center gap-6 mb-16">
      <button
        v-for="category in categories"
        :key="category.value"
        @click="activeCategory = category.value"
        class="px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
        :class="[
          activeCategory === category.value
            ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white shadow-xl transform scale-105'
            : 'bg-white/90 dark:bg-neutral-700/90 backdrop-blur-sm text-neutral-600 dark:text-neutral-400 hover:bg-gradient-to-r hover:from-purple-100 hover:via-pink-100 hover:to-blue-100 dark:hover:from-purple-900/20 dark:hover:via-pink-900/20 dark:hover:to-blue-900/20 hover:scale-105 shadow-lg hover:shadow-xl'
        ]"
      >
        {{ category.label }}
      </button>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-slate-200 dark:border-slate-700"
      >
        <component :is="project.liveUrl ? 'a' : 'div'"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="aspect-video bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 flex items-center justify-center relative overflow-hidden"
        >
          <img 
            :src="project.image" 
            :alt="project.title"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            @error="$event.target.style.display='none'; $event.target.nextElementSibling.style.display='flex'"
          />
          <div class="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-slate-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-500" style="display: none;">
            {{ project.title.charAt(0) }}
          </div>
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </component>

        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-700">
              {{ getCategoryLabel(project.category) }}
            </span>
            <div class="flex space-x-3">
              <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-indigo-500 transition-colors p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in project.techStack.slice(0, 3)" :key="tech" class="text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-600">
              {{ tech }}
            </span>
            <span v-if="project.techStack.length > 3" class="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-600">
              +{{ project.techStack.length - 3 }} more
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <!-- Skills Section -->
    <section id="skills" class="py-12 md:py-16 lg:py-24 section-bg-1 section-spacing section-separator min-h-[80vh]" style="margin-bottom: 6rem; margin-top: 2rem;">
      <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <!-- Enhanced Header -->
        <div class="text-center mb-20">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-xl">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 class="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
            Skills & <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p class="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and methodologies I use to create exceptional digital experiences.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Design Skills -->
          <div class="skills-card group relative bg-white dark:bg-slate-800 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 overflow-hidden">
            <!-- Background Gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Floating Elements -->
            <div class="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500 animation-delay-1000"></div>
            
            <div class="relative z-10">
              <div class="skills-icon w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 class="text-3xl font-bold text-slate-800 dark:text-white mb-6 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Design</h3>
              <div class="flex flex-wrap gap-3 justify-center">
                <span v-for="skill in designSkills" :key="skill" class="skills-tag bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 rounded-2xl text-sm font-semibold text-purple-700 dark:text-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-200 dark:border-purple-700">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
          
          <!-- Testing Skills -->
          <div class="skills-card group relative bg-white dark:bg-slate-800 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-200 dark:border-slate-700 hover:border-pink-300 dark:hover:border-pink-600 overflow-hidden">
            <!-- Background Gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Floating Elements -->
            <div class="absolute top-4 right-4 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500 animation-delay-1000"></div>
            
            <div class="relative z-10">
              <div class="skills-icon w-24 h-24 bg-gradient-to-br from-pink-500 via-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-3xl font-bold text-slate-800 dark:text-white mb-6 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">Testing</h3>
              <div class="flex flex-wrap gap-3 justify-center">
                <span v-for="skill in testingSkills" :key="skill" class="skills-tag bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/30 dark:to-purple-900/30 px-4 py-2 rounded-2xl text-sm font-semibold text-pink-700 dark:text-pink-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-pink-200 dark:border-pink-700">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
          
          <!-- Development Skills -->
          <div class="skills-card group relative bg-white dark:bg-slate-800 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 overflow-hidden">
            <!-- Background Gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Floating Elements -->
            <div class="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute bottom-4 left-4 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500 animation-delay-1000"></div>
            
            <div class="relative z-10">
              <div class="skills-icon w-24 h-24 bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 class="text-3xl font-bold text-slate-800 dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Development</h3>
              <div class="flex flex-wrap gap-3 justify-center">
                <span v-for="skill in developmentSkills" :key="skill" class="skills-tag bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 px-4 py-2 rounded-2xl text-sm font-semibold text-blue-700 dark:text-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-200 dark:border-blue-700">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resume Section -->
    <section id="resume" class="py-12 md:py-16 lg:py-24 section-spacing section-separator relative overflow-hidden min-h-[80vh] dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900" style="margin-bottom: 6rem; margin-top: 2rem; background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 25%, #93c5fd 50%, #60a5fa 75%, #3b82f6 100%);">
      <!-- Background Pattern -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full -translate-y-32 translate-x-32"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full translate-y-24 -translate-x-24"></div>
      <div class="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-sky-400/10 to-blue-400/10 rounded-full -translate-x-16 -translate-y-16"></div>
      
      <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <!-- Enhanced Header -->
        <div class="text-center mb-20">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl mb-6 shadow-xl">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 class="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
            Experience & <span class="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p class="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            My professional journey, educational milestones, and the experiences that have shaped my career.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Experience -->
          <div>
            <h3 class="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              Experience
            </h3>
            <div class="space-y-6">
              <div v-for="exp in experience" :key="exp.id" class="relative pl-8 group">
                <div class="absolute left-0 top-3 w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                <div class="absolute left-2 top-7 w-1 h-full bg-gradient-to-b from-blue-300 to-blue-600 dark:from-blue-400 dark:to-blue-700 shadow-lg"></div>
                <div class="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-700/50 dark:border-blue-600/50 group-hover:border-blue-400 dark:group-hover:border-blue-500">
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 class="font-bold text-white text-lg">{{ exp.title }}</h4>
                    <span class="text-sm text-blue-300 font-semibold bg-blue-800/50 px-3 py-1 rounded-full">{{ exp.year }}</span>
                  </div>
                  <p class="text-blue-100 font-semibold mb-3 text-base">{{ exp.company }}</p>
                  <p class="text-slate-300 text-sm leading-relaxed mb-4">{{ exp.description }}</p>
                  <!-- Clickable Links Section -->
                  <div v-if="exp.links && exp.links.length > 0" class="flex flex-wrap gap-2 mt-4">
                    <a 
                      v-for="link in exp.links" 
                      :key="link.name"
                      :href="link.url" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="inline-flex items-center px-4 py-2 bg-blue-600/80 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
                    >
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {{ link.name }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div>
            <h3 class="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center">
              <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              Education
            </h3>
            <div class="space-y-6">
              <div v-for="edu in education" :key="edu.id" class="relative pl-8 group">
                <div class="absolute left-0 top-3 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                <div class="absolute left-2 top-7 w-1 h-full bg-gradient-to-b from-indigo-300 to-purple-600 dark:from-indigo-400 dark:to-purple-700 shadow-lg"></div>
                <div class="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-700/50 dark:border-blue-600/50 group-hover:border-blue-400 dark:group-hover:border-blue-500">
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 class="font-bold text-white text-lg">{{ edu.degree }}</h4>
                    <span class="text-sm text-blue-300 font-semibold bg-blue-800/50 px-3 py-1 rounded-full">{{ edu.year }}</span>
                  </div>
                  <p class="text-blue-100 font-semibold mb-3 text-base">{{ edu.institution }}</p>
                  <p class="text-slate-300 text-sm leading-relaxed">{{ edu.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-slate-900 dark:via-purple-900 dark:to-pink-900 min-h-[80vh]" style="margin-bottom: 8rem; margin-top: 2rem;">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <!-- Enhanced Section Header -->
        <div class="text-center mb-20 animate-fade-in">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mb-6 shadow-xl">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Life & <span class="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Activities</span>
          </h2>
          <p class="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A personal glimpse into my world beyond work - the hobbies, experiences, and moments that shape who I am.
          </p>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Photo 1 - Work/Study -->
          <div @click="openGallery('work-study')" class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <!-- Auto-sliding Image Preview -->
            <div class="absolute inset-0 z-10">
              <div class="relative w-full h-full">
                <img 
                  v-for="(image, index) in galleryData['work-study'].images" 
                  :key="index"
                  :src="image" 
                  :alt="`Work & Study ${index + 1}`"
                  class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                  :class="workStudyImageIndex === index ? 'opacity-100' : 'opacity-0'"
                />
                <!-- Overlay for better text readability -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="relative z-20 flex flex-col justify-end h-full p-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-500/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-white mb-2 drop-shadow-lg">Work & Study</h3>
                <p class="text-sm text-white/90 drop-shadow-md">Coding sessions, learning new technologies, and working on projects</p>
              </div>
            </div>
            
            <!-- Click indicator -->
            <div class="absolute top-4 right-4 z-30 w-8 h-8 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg class="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
            
            <!-- Image counter dots -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
              <div 
                v-for="(image, index) in galleryData['work-study'].images" 
                :key="index"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="workStudyImageIndex === index ? 'bg-white shadow-lg' : 'bg-white/50'"
              ></div>
            </div>
          </div>

          <!-- Photo 2 - Hobbies -->
          <div @click="openGallery('hobbies')" class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <!-- Auto-sliding Image Preview -->
            <div class="absolute inset-0 z-10">
              <div class="relative w-full h-full">
                <img 
                  v-for="(image, index) in galleryData['hobbies'].images" 
                  :key="index"
                  :src="image" 
                  :alt="`Hobbies ${index + 1}`"
                  class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                  :class="hobbiesImageIndex === index ? 'opacity-100' : 'opacity-0'"
                />
                <!-- Overlay for better text readability -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="relative z-20 flex flex-col justify-end h-full p-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-green-500/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-white mb-2 drop-shadow-lg">Hobbies & Interests</h3>
                <p class="text-sm text-white/90 drop-shadow-md">Photography, reading, music, and exploring new places</p>
              </div>
            </div>
            
            <!-- Click indicator -->
            <div class="absolute top-4 right-4 z-30 w-8 h-8 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg class="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
            
            <!-- Image counter dots -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
              <div 
                v-for="(image, index) in galleryData['hobbies'].images" 
                :key="index"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="hobbiesImageIndex === index ? 'bg-white shadow-lg' : 'bg-white/50'"
              ></div>
            </div>
          </div>

          <!-- Photo 3 - Travel/Adventure -->
          <div @click="openGallery('travel')" class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <!-- Auto-sliding Image Preview -->
            <div class="absolute inset-0 z-10">
              <div class="relative w-full h-full">
                <img 
                  v-for="(image, index) in galleryData['travel'].images" 
                  :key="index"
                  :src="image" 
                  :alt="`Travel ${index + 1}`"
                  class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                  :class="travelImageIndex === index ? 'opacity-100' : 'opacity-0'"
                />
                <!-- Overlay for better text readability -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="relative z-20 flex flex-col justify-end h-full p-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-orange-500/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-white mb-2 drop-shadow-lg">Travel & Adventure</h3>
                <p class="text-sm text-white/90 drop-shadow-md">Exploring new places, trying new foods, and creating memories</p>
              </div>
            </div>
            
            <!-- Click indicator -->
            <div class="absolute top-4 right-4 z-30 w-8 h-8 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg class="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
            
            <!-- Image counter dots -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
              <div 
                v-for="(image, index) in galleryData['travel'].images" 
                :key="index"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="travelImageIndex === index ? 'bg-white shadow-lg' : 'bg-white/50'"
              ></div>
            </div>
          </div>

          <!-- Photo 4 - Friends/Family -->
          <div @click="openGallery('friends')" class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <!-- Auto-sliding Image Preview -->
            <div class="absolute inset-0 z-10">
              <div class="relative w-full h-full">
                <img 
                  v-for="(image, index) in galleryData['friends'].images" 
                  :key="index"
                  :src="image" 
                  :alt="`Friends ${index + 1}`"
                  class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                  :class="friendsImageIndex === index ? 'opacity-100' : 'opacity-0'"
                />
                <!-- Overlay for better text readability -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="relative z-20 flex flex-col justify-end h-full p-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-purple-500/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-white mb-2 drop-shadow-lg">Friends & Family</h3>
                <p class="text-sm text-white/90 drop-shadow-md">Quality time with loved ones, celebrations, and special moments</p>
              </div>
            </div>
            
            <!-- Click indicator -->
            <div class="absolute top-4 right-4 z-30 w-8 h-8 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg class="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
            
            <!-- Image counter dots -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
              <div 
                v-for="(image, index) in galleryData['friends'].images" 
                :key="index"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="friendsImageIndex === index ? 'bg-white shadow-lg' : 'bg-white/50'"
              ></div>
            </div>
          </div>

          <!-- Photo 5 - Achievements -->
          <div @click="openGallery('achievements')" class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <!-- Auto-sliding Image Preview -->
            <div class="absolute inset-0 z-10">
              <div class="relative w-full h-full">
                <img 
                  v-for="(image, index) in galleryData['achievements'].images" 
                  :key="index"
                  :src="image" 
                  :alt="`Achievement ${index + 1}`"
                  class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                  :class="achievementImageIndex === index ? 'opacity-100' : 'opacity-0'"
                  style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges; image-rendering: pixelated; -webkit-backface-visibility: hidden; -webkit-transform: translateZ(0); transform: translateZ(0);"
                />
                <!-- Overlay for better text readability -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="relative z-20 flex flex-col justify-end h-full p-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-yellow-500/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-white mb-2 drop-shadow-lg">Achievements</h3>
                <p class="text-sm text-white/90 drop-shadow-md">Certifications, awards, and milestones in my career journey</p>
              </div>
            </div>
            
            <!-- Click indicator -->
            <div class="absolute top-4 right-4 z-30 w-8 h-8 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg class="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
            
            <!-- Image counter dots -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
              <div 
                v-for="(image, index) in galleryData['achievements'].images" 
                :key="index"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="achievementImageIndex === index ? 'bg-white shadow-lg' : 'bg-white/50'"
              ></div>
            </div>
          </div>

          <!-- Photo 6 - Creative Projects -->
          <div @click="openGallery('creative')" class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <!-- Auto-sliding Image Preview -->
            <div class="absolute inset-0 z-10">
              <div class="relative w-full h-full">
                <img 
                  v-for="(image, index) in galleryData['creative'].images" 
                  :key="index"
                  :src="image" 
                  :alt="`Creative ${index + 1}`"
                  class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                  :class="creativeImageIndex === index ? 'opacity-100' : 'opacity-0'"
                />
                <!-- Overlay for better text readability -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="relative z-20 flex flex-col justify-end h-full p-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-teal-500/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-white mb-2 drop-shadow-lg">Creative Projects</h3>
                <p class="text-sm text-white/90 drop-shadow-md">Design experiments, creative coding, and artistic explorations</p>
              </div>
            </div>
            
            <!-- Click indicator -->
            <div class="absolute top-4 right-4 z-30 w-8 h-8 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg class="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
            
            <!-- Image counter dots -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
              <div 
                v-for="(image, index) in galleryData['creative'].images" 
                :key="index"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="creativeImageIndex === index ? 'bg-white shadow-lg' : 'bg-white/50'"
              ></div>
            </div>
          </div>
        </div>

      
      </div>
    </section>

    <!-- Image Slider Modal -->
    <div v-if="showGallery" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" @click="closeGallery">
      <div class="relative w-full max-w-4xl mx-4" @click.stop>
        <!-- Close Button -->
        <button @click="closeGallery" class="absolute top-4 right-4 z-10 w-12 h-12 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 transition-colors shadow-lg">
          <svg class="w-6 h-6 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Enhanced Gallery Title -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-xl">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">{{ currentGallery.title }}</h3>
          <p class="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">{{ currentGallery.description }}</p>
        </div>

        <!-- Image Container -->
        <div class="relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <!-- Main Image -->
          <div class="relative aspect-video bg-gray-100 dark:bg-slate-700">
            <img 
              :src="currentGallery.images[currentImageIndex]" 
              :alt="currentGallery.title"
              class="w-full h-full object-cover transition-all duration-500"
              style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges; image-rendering: pixelated; -webkit-backface-visibility: hidden; -webkit-transform: translateZ(0); transform: translateZ(0);"
            />
            
            <!-- Enhanced Image Counter -->
            <div class="absolute top-4 left-4 bg-gradient-to-r from-blue-500/90 to-purple-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ currentImageIndex + 1 }} / {{ currentGallery.images.length }}
              </span>
            </div>
          </div>

          <!-- Enhanced Navigation Arrows -->
          <button 
            v-if="currentGallery.images.length > 1"
            @click="previousImage" 
            class="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 group"
          >
            <svg class="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            v-if="currentGallery.images.length > 1"
            @click="nextImage" 
            class="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 group"
          >
            <svg class="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Enhanced Thumbnail Strip -->
          <div v-if="currentGallery.images.length > 1" class="p-6 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700">
            <div class="flex justify-center space-x-3 overflow-x-auto">
              <button
                v-for="(image, index) in currentGallery.images"
                :key="index"
                @click="currentImageIndex = index"
                class="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-3 transition-all duration-300 transform hover:scale-110"
                :class="currentImageIndex === index 
                  ? 'border-blue-500 shadow-xl ring-4 ring-blue-200 dark:ring-blue-800' 
                  : 'border-slate-300 dark:border-slate-600 hover:border-blue-400 hover:shadow-lg'"
              >
                <img 
                  :src="image" 
                  :alt="`Thumbnail ${index + 1}`" 
                  class="w-full h-full object-cover"
                  style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges; image-rendering: pixelated; -webkit-backface-visibility: hidden; -webkit-transform: translateZ(0); transform: translateZ(0);"
                />
                <!-- Active indicator -->
                <div v-if="currentImageIndex === index" class="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                  <svg class="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <section id="contact" class="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 min-h-[80vh]" style="margin-bottom: 8rem;">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 class="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p class="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <!-- Contact Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- iPhone Style Contact Form - Left Side -->
          <div class="relative w-full max-w-sm mx-auto lg:mx-0">
            <!-- iPhone 14 Pro Frame -->
            <div class="relative bg-black rounded-[3.5rem] p-4 shadow-2xl border-4 border-gray-800">
              <!-- iPhone Screen -->
              <div class="bg-black rounded-[3rem] p-2 border-2 border-gray-900">
                <div class="bg-white rounded-[2.5rem] overflow-hidden relative border border-gray-200">
                  <!-- iPhone Status Bar -->
                  <div class="bg-white px-6 py-3 flex items-center justify-between text-black text-sm font-medium">
                    <div class="flex items-center space-x-1">
                      <span class="text-xs">9:41</span>
                    </div>
                    <div class="flex items-center space-x-1">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2 17h20v2H2zm1.15-4.05L4 12l.85.95L5.5 12l-.85-.95L4 11l-.85.95L2.5 12l.85.95zM6 12l.85-.95L7.5 12l-.85.95L6 13l-.85-.95L4.5 12l.85-.95L6 12zm2.5 0l.85-.95L9.5 12l-.85.95L8.5 13l-.85-.95L7 12l.85-.95L8.5 12zm2.5 0l.85-.95L12 12l-.85.95L11 13l-.85-.95L9.5 12l.85-.95L11 12z"/>
                      </svg>
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2-2-2c-5.52-5.52-14.48-5.52-20 0l-2 2zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2-2-2c-3.31-3.31-8.69-3.31-12 0l-2 2z"/>
                      </svg>
                      <div class="w-6 h-3 border border-black dark:border-white rounded-sm">
                        <div class="w-4 h-2 bg-green-500 rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  <!-- iPhone Notch (Dynamic Island) -->
                  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-10 border border-gray-800"></div>

                  <!-- Contact Form Interface -->
                  <div class="pt-2">
                    <!-- Form Header -->
                    <div class="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 flex items-center">
                      <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 class="text-white font-semibold text-lg">Send Message</h3>
                        <p class="text-blue-100 text-sm">Get in touch with me</p>
                      </div>
                    </div>

                    <!-- Form Content -->
                    <div class="p-6 space-y-6 bg-gradient-to-br from-white via-blue-50 to-indigo-50 min-h-[400px] relative overflow-hidden">
                      <!-- Background Pattern -->
                      <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -translate-y-10 translate-x-10"></div>
                      <div class="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-400/20 to-rose-400/20 rounded-full translate-y-8 -translate-x-8"></div>
                      
                      <form class="space-y-6 relative z-10">
                        <div>
                          <label class="block text-sm font-medium text-gray-700 mb-3">Name</label>
                          <input type="text" placeholder="Your name" class="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/50 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 placeholder-gray-500 shadow-sm hover:shadow-md transition-all duration-200">
                        </div>
                        <div>
                          <label class="block text-sm font-medium text-gray-700 mb-3">Email</label>
                          <input type="email" placeholder="your.email@example.com" class="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/50 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 placeholder-gray-500 shadow-sm hover:shadow-md transition-all duration-200">
                        </div>
                        <div>
                          <label class="block text-sm font-medium text-gray-700 mb-3">Message</label>
                          <textarea rows="4" placeholder="Tell me about your project..." class="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/50 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 placeholder-gray-500 resize-none shadow-sm hover:shadow-md transition-all duration-200"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105">
                          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- iPhone Home Indicator -->
            <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full"></div>
          </div>

          <!-- Contact Info - Right Side -->
          <div class="space-y-8">
            <!-- Enhanced Get in Touch Card -->
            <div class="bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600 rounded-3xl shadow-2xl p-8 border border-blue-200 dark:border-slate-600 relative overflow-hidden">
              <!-- Background Pattern -->
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400/20 to-rose-400/20 rounded-full translate-y-12 -translate-x-12"></div>
              
              <!-- Header with Icon -->
              <div class="relative z-10 mb-8">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg animate-bounce">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="relative">
                  <h3 class="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 relative">
                    Get in Touch
                    <div class="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  </h3>
                  <p class="text-slate-600 dark:text-slate-300 text-lg mb-4">
                    Let's connect and create something amazing together! 💫
                  </p>
                  <div class="flex items-center space-x-4 text-sm">
                    <div class="flex items-center space-x-2 text-green-600 dark:text-green-400">
                      <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span class="font-medium">Available for new projects</span>
                    </div>
                    <div class="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      <span>Quick response guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Contact Methods - Horizontal Layout -->
              <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- Email Card -->
                <a href="mailto:ainatulfadzilah0634@gmail.com" class="group flex flex-col items-center p-6 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-2xl hover:bg-blue-50 dark:hover:bg-slate-600 transition-all duration-300 border border-white/50 dark:border-slate-600/50 hover:shadow-xl hover:scale-105 text-center no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 relative overflow-hidden">
            
                  <!-- Floating Animation -->
                  <div class="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                  <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-12">
                    <svg class="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="font-bold text-slate-800 dark:text-white text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">Email Me</h4>
                  <p class="text-slate-600 dark:text-slate-300 text-sm mb-2 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300">ainafadzilah@example.com</p>
                  <div class="flex items-center space-x-1 text-xs text-blue-600 dark:text-blue-400">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span>Quick response guaranteed!</span>
                  </div>
                </a>

                <!-- LinkedIn Card -->
                <a href="https://www.linkedin.com/in/ainatul-fadzilah-89746b129/" target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center p-6 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-2xl hover:bg-blue-50 dark:hover:bg-slate-600 transition-all duration-300 border border-white/50 dark:border-slate-600/50 hover:shadow-xl hover:scale-105 text-center no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 relative overflow-hidden">
                  <!-- Floating Animation -->
                  <div class="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                  <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-rotate-12">
                    <svg class="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <h4 class="font-bold text-slate-800 dark:text-white text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">LinkedIn</h4>
                  <p class="text-slate-600 dark:text-slate-300 text-sm mb-2 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300">Professional networking</p>
                  <div class="flex items-center space-x-1 text-xs text-blue-600 dark:text-blue-400">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span>Let's connect professionally!</span>
                  </div>
                </a>

                <!-- GitHub Card -->
                <a href="https://github.com/Fadzilah00" target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center p-6 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-2xl hover:bg-blue-50 dark:hover:bg-slate-600 transition-all duration-300 border border-white/50 dark:border-slate-600/50 hover:shadow-xl hover:scale-105 text-center no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 relative overflow-hidden">
                  <!-- Floating Animation -->
                  <div class="absolute top-2 right-2 w-3 h-3 bg-gray-600 rounded-full animate-ping opacity-75"></div>
                  <div class="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-12">
                    <svg class="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <h4 class="font-bold text-slate-800 dark:text-white text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">GitHub</h4>
                  <p class="text-slate-600 dark:text-slate-300 text-sm mb-2 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300">View my projects</p>
                  <div class="flex items-center space-x-1 text-xs text-blue-600 dark:text-blue-400">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span>Check out my latest work!</span>
                  </div>
                </a>
              </div>

              <!-- Call to Action -->
              <div class="relative z-10 mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-200/50 dark:border-slate-600/50">
                <div class="text-center">
                  <h4 class="text-lg font-semibold text-slate-800 dark:text-white mb-2">Ready to start your project?</h4>
                  <p class="text-slate-600 dark:text-slate-300 text-sm">I'm available for freelance work and always excited to take on new challenges!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
// Global SEO Meta tags
useHead({
  title: 'Aina Fadzilah - Portfolio',
  meta: [
    { name: 'description', content: 'Professional portfolio of Aina Fadzilah - UI/UX Designer, Software Tester, and Junior Developer. Creating exceptional digital experiences.' }
  ]
})

// Import portfolio data
import { projects, getProjectsByCategory } from '~/data/portfolio'

// Portfolio filtering
const activeCategory = ref('all')
const categories = [
  { label: 'All', value: 'all' },
  { label: 'UI/UX', value: 'ui-ux' },
  { label: 'Testing', value: 'testing' },
  { label: 'Development', value: 'development' }
]

// Gallery functionality
const showGallery = ref(false)
const currentImageIndex = ref(0)
const currentGallery = ref({})

// Auto-sliding for all gallery cards
const achievementImageIndex = ref(0)
const workStudyImageIndex = ref(0)
const hobbiesImageIndex = ref(0)
const travelImageIndex = ref(0)
const friendsImageIndex = ref(0)
const creativeImageIndex = ref(0)

let achievementSlideInterval = null
let workStudySlideInterval = null
let hobbiesSlideInterval = null
let travelSlideInterval = null
let friendsSlideInterval = null
let creativeSlideInterval = null

// Gallery data with sample images
// HOW TO CHANGE GALLERY IMAGES:
// 1. Place your image files in the 'public/images/' folder
// 2. Update the image paths below (e.g., '/images/your-image.jpg')
// 3. You can add as many images as you want to each gallery category
// 4. Supported formats: .jpg, .jpeg, .png, .webp, .gif
// 
// Example: If you add 'my-photo.jpg' to public/images/, use '/images/my-photo.jpg'
const galleryData = {
  'work-study': {
    title: 'Work & Study',
    description: 'Coding sessions, learning new technologies, and working on projects',
    images: [
      '/images/WRK1.jpg',
      '/images/WRK2.jpg',
      '/images/WRK3.jpg',
      '/images/WRK4.jpg',
      '/images/WRK5.jpg'
      // Add more images here: '/images/your-image.jpg',
    ]
  },
  'hobbies': {
    title: 'Hobbies & Interests',
    description: 'Photography, reading, music, and exploring new places',
    images: [
      '/images/HOB1.jpg',
      '/images/HOB2.jpg',
      '/images/HOB3.jpg'
      // Add more images here: '/images/your-image.jpg',
    ]
  },
  'travel': {
    title: 'Travel & Adventure',
    description: 'Exploring new places, trying new foods, and creating memories',
    images: [
      '/images/TRV1.jpg',
      '/images/TRV2.jpg',
      '/images/TRV3.jpg'
      // Add more images here: '/images/your-image.jpg',
    ]
  },
  'friends': {
    title: 'Friends & Family',
    description: 'Quality time with loved ones, celebrations, and special moments',
    images: [
      '/images/FRD1.jpg',
      '/images/FRD2.jpg',
      '/images/FRD3.jpg'
      // Add more images here: '/images/your-image.jpg',
    ]
  },
  'achievements': {
    title: 'Achievements',
    description: 'Certifications, awards, and milestones in my career journey',
    images: [
      '/images/ACH1.jpg',
      '/images/ACH2.jpg',
      '/images/ACH3.jpg'
      // Add more images here: '/images/your-image.jpg',
    ]
  },
  'creative': {
    title: 'Creative Projects',
    description: 'Design experiments, creative coding, and artistic explorations',
    images: [
      '/images/DEV1.png',
      '/images/DEV2.png',
      '/images/UI2.png'
      // Add more images here: '/images/your-image.jpg',
    ]
  }
}

// Gallery functions
const openGallery = (galleryKey) => {
  currentGallery.value = galleryData[galleryKey]
  currentImageIndex.value = 0
  showGallery.value = true
  document.body.style.overflow = 'hidden'
}

const closeGallery = () => {
  showGallery.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  if (currentImageIndex.value < currentGallery.value.images.length - 1) {
    currentImageIndex.value++
  } else {
    currentImageIndex.value = 0
  }
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  } else {
    currentImageIndex.value = currentGallery.value.images.length - 1
  }
}

// Keyboard navigation
const handleKeydown = (event) => {
  if (!showGallery.value) return
  
  switch (event.key) {
    case 'Escape':
      closeGallery()
      break
    case 'ArrowLeft':
      previousImage()
      break
    case 'ArrowRight':
      nextImage()
      break
  }
}

// Auto-slide functionality for all cards
const startAllSlides = () => {
  // Achievements
  achievementSlideInterval = setInterval(() => {
    achievementImageIndex.value = (achievementImageIndex.value + 1) % galleryData['achievements'].images.length
  }, 3000)
  
  // Work & Study
  workStudySlideInterval = setInterval(() => {
    workStudyImageIndex.value = (workStudyImageIndex.value + 1) % galleryData['work-study'].images.length
  }, 3500)
  
  // Hobbies
  hobbiesSlideInterval = setInterval(() => {
    hobbiesImageIndex.value = (hobbiesImageIndex.value + 1) % galleryData['hobbies'].images.length
  }, 4000)
  
  // Travel
  travelSlideInterval = setInterval(() => {
    travelImageIndex.value = (travelImageIndex.value + 1) % galleryData['travel'].images.length
  }, 3200)
  
  // Friends
  friendsSlideInterval = setInterval(() => {
    friendsImageIndex.value = (friendsImageIndex.value + 1) % galleryData['friends'].images.length
  }, 3800)
  
  // Creative
  creativeSlideInterval = setInterval(() => {
    creativeImageIndex.value = (creativeImageIndex.value + 1) % galleryData['creative'].images.length
  }, 3600)
}

const stopAllSlides = () => {
  if (achievementSlideInterval) clearInterval(achievementSlideInterval)
  if (workStudySlideInterval) clearInterval(workStudySlideInterval)
  if (hobbiesSlideInterval) clearInterval(hobbiesSlideInterval)
  if (travelSlideInterval) clearInterval(travelSlideInterval)
  if (friendsSlideInterval) clearInterval(friendsSlideInterval)
  if (creativeSlideInterval) clearInterval(creativeSlideInterval)
}

// Add keyboard event listener
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  startAllSlides()
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  stopAllSlides()
})

const filteredProjects = computed(() => {
  return getProjectsByCategory(activeCategory.value)
})

const getCategoryLabel = (category) => {
  const labels = {
    'ui-ux': 'UI/UX',
    'testing': 'Testing',
    'development': 'Development'
  }
  return labels[category] || category
}

// Skills data
const designSkills = [
  'Figma', 'Adobe XD', 'Sketch', 'Principle', 'User Research', 'Wireframing', 'Prototyping'
]

const testingSkills = [
  'Selenium', 'TestNG', 'JUnit', 'Postman', 'API Testing', 'Automation', 'CI/CD'
]

const developmentSkills = [
  'Vue.js', 'Nuxt 3', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Firebase'
]

// Experience data
const experience = [
  {
    id: 1,
    title: 'Software Testing Specialist',
    company: 'Tempb Global Technology Sdn Bhd',
    year: '2025 - Complete',
    description: 'Conducted functional and UI testing for QQlink web and mobile applications. Identified bugs, documented results, and ensured optimal user experience.',
    links: [
      { name: 'Company Website', url: 'https://example.com' },
      { name: 'LinkedIn', url: 'https://linkedin.com/company/example' }
    ]
  },
  {
    id: 2,
    title: 'Leader Linehaul',
    company: 'Shopee Warehouse Pulau Indah',
    year: '2024 - 2025',
    description: 'Led a logistics team to manage parcel movement and scheduling. Ensured accuracy, speed, and smooth coordination across linehaul operations.',
    // To add clickable links, uncomment and customize:
    // links: [
    //   { name: 'Company Website', url: 'https://shopee.com' },
    //   { name: 'LinkedIn', url: 'https://linkedin.com/company/shopee' }
    // ]
  },
  {
    id: 3,
    title: 'Retail Promoter',
    company: 'Tiny Buttons Sdn Bhd',
    year: '2022 - 2023',
    description: 'Assisted customers in choosing baby products and managing sales displays. Strengthened communication and customer service skills.',
    // To add clickable links, uncomment and customize:
    // links: [
    //   { name: 'Company Website', url: 'https://example.com' },
    //   { name: 'Facebook', url: 'https://facebook.com/example' }
    // ]
  }
]

// Education data
const education = [
  {
    id: 1,
    degree: 'Bachelor of Software Engineering (Hons)',
    institution: 'Univerity of Selangor (UNISEL)',
    year: '2022 - 2025',
    description: 'Specialized in Software Engineering focusing on web and UI design. Skilled in programming, leadership, and teamwork through an exchange student program. Achieved 4.00 GPA for Final Year Project: MoneyMate.'
  },
  {
    id: 2,
    degree: 'Foundation in Information Technology',
    institution: 'Univerity of Selangor (UNISEL)',
    year: '2021-2022',
    description: 'Foundation in Information Technology (CGPA 3.85) — gained solid knowledge in UI/UX design principles and hands-on experience with programming languages.'
  },
  {
    id: 3,
    degree: 'Sijil Pelajaran Malaysia (SPM)',
    institution: 'SMK Seri Tanjong, Selangor',
    year: '2016 - 2020',
    description: 'Completed secondary education (SPM) with 8As, including A- in Computer Science, and excellent results in Mathematics, Science, and English.'
  }
]

// Contact form
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    form.name = ''
    form.email = ''
    form.message = ''
    
    // Show success message
    alert('Message sent successfully! I\'ll get back to you soon.')
  } catch (error) {
    alert('Error sending message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>