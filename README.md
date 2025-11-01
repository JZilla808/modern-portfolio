# Modern Portfolio Website

A vibrant and interactive showcase of front-end and full-stack development work. The site highlights modern web development skills with a focus on clean design, smooth interactions, and accessible presentation of projects.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack
- **Next.js** – Production-grade React framework with server-side rendering and static site generation.
- **React** – Declarative UI library powering the component architecture.
- **TypeScript** – Static typing for safer, more maintainable code.
- **Tailwind CSS** – Utility-first styling for rapid, responsive layouts.
- **Framer Motion** – Animation library for polished transitions and interactions.
- **React Hook Form** – Lightweight form management with accessible validation.
- **ESLint & Prettier** – Code quality and formatting tools.

## Key Features
- **Responsive design** optimized for mobile, tablet, and desktop.
- **Interactive UI/UX** with Framer Motion powered animations.
- **Project showcase** sections highlighting experience and accomplishments.
- **Contact form** integrated with React Hook Form for validation and submission.
- **Social media integration** using React Social Icons for quick access to profiles.

## Project Structure
```
modern-portfolio/
├─ components/       # Reusable UI components
├─ pages/            # Next.js pages and API routes
├─ public/           # Static assets (images, favicons, etc.)
├─ styles/           # Global styles and Tailwind configuration
├─ package.json      # Dependencies and scripts
└─ README.md         # Project documentation
```

## Getting Started
1. **Clone the repository**
   ```bash
   git clone https://github.com/JZilla808/modern-portfolio.git
   cd modern-portfolio
   ```
2. **Install dependencies**
   ```bash
   pnpm install
   ```
3. **Start the development server**
   ```bash
   pnpm dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Environment Variables
No external services are required by default. If you add integrations (e.g., contact form backends or analytics), create a `.env.local` file and restart the dev server.

## Available Scripts
| Command        | Description                                  |
|----------------|----------------------------------------------|
| `pnpm dev`     | Starts the Next.js development server.       |
| `pnpm build`   | Creates an optimized production build.       |
| `pnpm start`   | Runs the production build locally.           |
| `pnpm lint`    | Runs ESLint over the project.                |

## Deployment
The site can be deployed to any platform that supports Next.js (e.g., Vercel, Netlify). For Vercel:
1. Push your changes to a GitHub repository.
2. Import the project into Vercel and select the repository.
3. Accept the default Next.js settings and deploy.

## Contributing
Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
