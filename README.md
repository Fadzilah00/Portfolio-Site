# Aina Fadzilah - Portfolio Website

A modern, responsive portfolio website built with Nuxt 3, Vue.js, and Tailwind CSS. This portfolio showcases skills in UI/UX Design, Software Testing, and Web Development.

## 🚀 Features

- **Modern Design**: Clean, minimal design with smooth animations
- **Responsive Layout**: Mobile-first approach with perfect responsiveness
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Interactive Portfolio**: Filter projects by category with hover effects
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance**: Optimized images and code splitting
- **Accessibility**: WCAG compliant with keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Nuxt 3
- **Frontend**: Vue.js 3, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Fonts**: Inter (Google Fonts)
- **Animations**: CSS animations with custom keyframes
- **Deployment**: Vercel ready

## 📁 Project Structure

```
portfolio/
├── assets/
│   └── css/
│       └── main.css              # Global styles and Tailwind
├── components/
│   ├── Header.vue               # Navigation header
│   ├── Footer.vue               # Footer component
│   └── ProjectCard.vue          # Portfolio project card
├── composables/
│   └── useTheme.ts              # Theme management
├── data/
│   └── portfolio.ts             # Portfolio projects data
├── layouts/
│   └── default.vue              # Main layout
├── pages/
│   └── index.vue                # Homepage
├── public/                      # Static assets
├── app.vue                      # Root component
├── nuxt.config.ts               # Nuxt configuration
├── tailwind.config.cjs          # Tailwind configuration
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` (or the port shown in terminal)

## 📝 Customization

### Personal Information

Update the following files with your personal information:

1. **`nuxt.config.ts`**
   - Update site URL, title, and meta descriptions
   - Replace social media URLs

2. **`components/Header.vue`**
   - Update navigation logo and name
   - Modify navigation items if needed

3. **`components/Footer.vue`**
   - Update social media links
   - Change contact information

4. **`pages/index.vue`**
   - Update hero section content
   - Modify about section text
   - Replace experience and education data
   - Update skills lists

5. **`data/portfolio.ts`**
   - Replace with your actual projects
   - Update project images, descriptions, and links

### Styling

- **Colors**: Modify the color palette in `tailwind.config.cjs`
- **Fonts**: Change fonts in `nuxt.config.ts` and CSS variables
- **Animations**: Customize animations in `assets/css/main.css`

### Adding New Projects

1. Open `data/portfolio.ts`
2. Add new project objects to the `projects` array
3. Ensure proper category mapping (`ui-ux`, `testing`, `development`)
4. Add corresponding images to the `public/projects/` folder

## 🎨 Design System

### Colors
- **Primary**: Teal (#0D9488) - Main brand color
- **Neutral**: Gray scale for text and backgrounds
- **Accent**: Purple, Green, Blue for category indicators

### Typography
- **Font**: Inter (400, 600, 700)
- **Headings**: 48px (h1), 36px (h2), 24px (h3)
- **Body**: 16px

### Spacing
- **Container**: Max-width 1280px with responsive padding
- **Sections**: 80px vertical padding (desktop), 64px (mobile)
- **Components**: 16px, 24px, 32px, 48px spacing scale

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Deploy automatically

2. **Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard

3. **Custom Domain** (optional)
   - Configure custom domain in Vercel settings

### Manual Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

### Other Platforms

This project can be deployed to:
- **Netlify**: Connect GitHub repository
- **GitHub Pages**: Use GitHub Actions
- **AWS S3**: Upload generated files
- **Firebase Hosting**: Use Firebase CLI

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run generate     # Generate static site
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
```

### Code Style

- Use TypeScript for type safety
- Follow Vue 3 Composition API patterns
- Use Tailwind utility classes
- Maintain consistent component structure
- Add comments for complex logic

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help with customization, feel free to reach out:

- **Email**: ainafadzilah@example.com
- **LinkedIn**: [linkedin.com/in/ainafadzilah](https://linkedin.com/in/ainafadzilah)
- **GitHub**: [github.com/ainafadzilah](https://github.com/ainafadzilah)

---

**Built with ❤️ by Aina Fadzilah**