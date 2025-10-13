<template>
  <div>
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5 dark:opacity-10">
        <div class="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div class="absolute top-40 right-20 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-40 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <!-- Profile Image -->
          <div class="mb-8">
            <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-2xl">
              A
            </div>
          </div>
          
          <!-- Main Heading -->
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-6 animate-fade-in">
            Hi, I'm 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600">
              Aina
            </span>
          </h1>
          
          <!-- Subtitle -->
          <div class="text-xl md:text-2xl lg:text-3xl text-neutral-600 dark:text-neutral-400 mb-8 font-medium">
            <span class="inline-block animate-slide-in-left animation-delay-300">UI/UX Designer</span>
            <span class="mx-4 text-primary-500 dark:text-primary-400">•</span>
            <span class="inline-block animate-slide-in-left animation-delay-500">Software Tester</span>
            <span class="mx-4 text-primary-500 dark:text-primary-400">•</span>
            <span class="inline-block animate-slide-in-left animation-delay-700">Junior Developer</span>
          </div>
          
          <!-- Description -->
          <p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-1000">
            Passionate about creating exceptional user experiences through thoughtful design, 
            rigorous testing, and clean code. Let's build something amazing together.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up animation-delay-1200">
            <NuxtLink to="#portfolio" class="btn-primary group">
              <span>View My Work</span>
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <a href="/resume.pdf" download class="btn-outline group">
              <span>Download CV</span>
              <svg class="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
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
    <section id="about" class="py-20 bg-white dark:bg-neutral-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="animate-slide-in-left">
            <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              About Me
            </h2>
            <div class="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                I'm a creative professional with a unique blend of skills in UI/UX design, 
                software testing, and web development. My journey combines design thinking, 
                technical implementation, and quality assurance to deliver exceptional digital experiences.
              </p>
              <p>
                With a passion for problem-solving and attention to detail, I approach every 
                project with curiosity and dedication. I believe in creating user-centered 
                solutions that not only look beautiful but also function flawlessly.
              </p>
              <p>
                When I'm not coding or designing, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div class="mt-8">
              <a href="/resume.pdf" download class="btn-secondary">
                Download Resume
              </a>
            </div>
          </div>
          
          <!-- Profile Image -->
          <div class="animate-slide-in-right">
            <div class="relative">
              <div class="w-80 h-80 mx-auto rounded-3xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center shadow-2xl">
                <div class="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-6xl font-bold">
                  A
                </div>
              </div>
              <!-- Floating elements -->
              <div class="absolute -top-4 -right-4 w-16 h-16 bg-accent-purple rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                💡
              </div>
              <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-24 bg-neutral-50 dark:bg-neutral-800 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            My Work
          </h2>
          <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A showcase of my projects across UI/UX design, software testing, and web development.
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="category in categories"
            :key="category.value"
            @click="activeCategory = category.value"
            class="px-6 py-3 rounded-full font-medium transition-all duration-200"
            :class="[
              activeCategory === category.value
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
            ]"
          >
            {{ category.label }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
            class="animate-fade-in"
          />
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-24 bg-white dark:bg-neutral-900 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Skills Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Skills & Tools
          </h2>
          <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <!-- Skills Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <!-- Design Skills -->
          <div class="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
            <h3 class="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Design</h3>
            <div class="space-y-2">
              <span v-for="skill in designSkills" :key="skill" class="inline-block bg-white dark:bg-neutral-700 px-3 py-1 rounded-full text-sm text-neutral-600 dark:text-neutral-400 mr-2 mb-2">
                {{ skill }}
              </span>
            </div>
          </div>
            
          <!-- Testing Skills -->
          <div class="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            <h3 class="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Testing</h3>
            <div class="space-y-2">
              <span v-for="skill in testingSkills" :key="skill" class="inline-block bg-white dark:bg-neutral-700 px-3 py-1 rounded-full text-sm text-neutral-600 dark:text-neutral-400 mr-2 mb-2">
                {{ skill }}
              </span>
            </div>
          </div>
            
          <!-- Development Skills -->
          <div class="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            <h3 class="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Development</h3>
            <div class="space-y-2">
              <span v-for="skill in developmentSkills" :key="skill" class="inline-block bg-white dark:bg-neutral-700 px-3 py-1 rounded-full text-sm text-neutral-600 dark:text-neutral-400 mr-2 mb-2">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <!-- Skills Description -->
        <div class="text-center">
          <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and methodologies I use to create exceptional digital experiences.
          </p>
        </div>
      </div>
    </section>

    <!-- Resume Section -->
    <section id="resume" class="py-24 bg-neutral-50 dark:bg-neutral-800 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            My professional journey and educational background.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Experience -->
          <div>
            <h3 class="text-2xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center">
              <svg class="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
              Experience
            </h3>
            <div class="space-y-8">
              <div v-for="exp in experience" :key="exp.id" class="relative pl-8">
                <div class="absolute left-0 top-2 w-3 h-3 bg-primary-600 rounded-full"></div>
                <div class="absolute left-1.5 top-5 w-0.5 h-full bg-neutral-200 dark:bg-neutral-700"></div>
                <div class="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-sm">
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 class="font-semibold text-neutral-900 dark:text-white">{{ exp.title }}</h4>
                    <span class="text-sm text-primary-600 dark:text-primary-400 font-medium">{{ exp.year }}</span>
                  </div>
                  <p class="text-neutral-600 dark:text-neutral-400 font-medium mb-2">{{ exp.company }}</p>
                  <p class="text-neutral-600 dark:text-neutral-400 text-sm">{{ exp.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div>
            <h3 class="text-2xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center">
              <svg class="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education
            </h3>
            <div class="space-y-8">
              <div v-for="edu in education" :key="edu.id" class="relative pl-8">
                <div class="absolute left-0 top-2 w-3 h-3 bg-primary-600 rounded-full"></div>
                <div class="absolute left-1.5 top-5 w-0.5 h-full bg-neutral-200 dark:bg-neutral-700"></div>
                <div class="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-sm">
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 class="font-semibold text-neutral-900 dark:text-white">{{ edu.degree }}</h4>
                    <span class="text-sm text-primary-600 dark:text-primary-400 font-medium">{{ edu.year }}</span>
                  </div>
                  <p class="text-neutral-600 dark:text-neutral-400 font-medium mb-2">{{ edu.institution }}</p>
                  <p class="text-neutral-600 dark:text-neutral-400 text-sm">{{ edu.description }}</p>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 bg-white dark:bg-neutral-900 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Send me a message</h3>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Name</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h3 class="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Get in touch</h3>
              <p class="text-neutral-600 dark:text-neutral-400 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div class="space-y-6">
              <a
                href="mailto:ainafadzilah@example.com"
                class="flex items-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-200 group"
              >
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                  <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-neutral-900 dark:text-white">Email</p>
                  <p class="text-neutral-600 dark:text-neutral-400">ainafadzilah@example.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/ainafadzilah"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-200 group"
              >
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                  <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-neutral-900 dark:text-white">LinkedIn</p>
                  <p class="text-neutral-600 dark:text-neutral-400">linkedin.com/in/ainafadzilah</p>
                </div>
              </a>

              <a
                href="https://github.com/ainafadzilah"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-200 group"
              >
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                  <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-neutral-900 dark:text-white">GitHub</p>
                  <p class="text-neutral-600 dark:text-neutral-400">github.com/ainafadzilah</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Home',
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

const filteredProjects = computed(() => {
  return getProjectsByCategory(activeCategory.value)
})

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
    title: 'Junior UI/UX Designer',
    company: 'Tech Solutions Inc.',
    year: '2023 - Present',
    description: 'Designed user interfaces and experiences for web and mobile applications. Conducted user research and created interactive prototypes.'
  },
  {
    id: 2,
    title: 'Software Tester',
    company: 'Digital Agency Co.',
    year: '2022 - 2023',
    description: 'Developed and executed test plans, automated testing scripts, and ensured software quality through comprehensive testing strategies.'
  },
  {
    id: 3,
    title: 'Frontend Developer Intern',
    company: 'StartupXYZ',
    year: '2021 - 2022',
    description: 'Built responsive web applications using Vue.js and modern CSS frameworks. Collaborated with design team to implement UI components.'
  }
]

// Education data
const education = [
  {
    id: 1,
    degree: 'Bachelor of Computer Science',
    institution: 'University of Technology',
    year: '2018 - 2022',
    description: 'Specialized in Software Engineering with focus on web development and user interface design.'
  },
  {
    id: 2,
    degree: 'UI/UX Design Certificate',
    institution: 'Design Academy',
    year: '2021',
    description: 'Comprehensive course covering user research, wireframing, prototyping, and design systems.'
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
    
    // Show success message (you can implement a toast notification here)
    alert('Message sent successfully! I\'ll get back to you soon.')
  } catch (error) {
    alert('Error sending message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>