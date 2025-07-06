# Shubham Kumar - Portfolio

A modern, responsive portfolio website showcasing my work as an Information Technology Student & Full Stack Developer. Built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn UI. Features a project showcase, work experience timeline, and contact form with Telegram integration.

![Portfolio Preview](/public/meta/hero.png)

## About Me

I'm Shubham Kumar, an Information Technology student at GTBIT (GGSIPU) and a passionate Full Stack Developer. This portfolio showcases my projects, technical expertise, and professional journey in software development.

## Deploy 

Deploy your own version of this portfolio:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Framxcodes%2Fsleek-portfolio&env=TELEGRAM_BOT_TOKEN,TELEGRAM_CHAT_ID,GEMINI_API_KEY,NEXT_PUBLIC_URL)

## Features

- **Next.js 15** with App Router
- **Tailwind CSS** for styling
- **Shadcn UI** components
- **Dark/Light** mode toggle
- **Responsive** design optimized for all devices
- **MDX** for project details and documentation
- **Contact Form** with Telegram integration
- **SEO** optimized with proper metadata
- **TypeScript** for type safety and better development experience
- **Project Showcase** with detailed case studies
- **Work Experience** timeline
- **Resume** section with downloadable PDF
- **Skills** showcase with technology icons

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- Bun (preferred) or npm

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
TELEGRAM_BOT_TOKEN="your-token"
TELEGRAM_CHAT_ID="your-chat-id"
GEMINI_API_KEY="your-api-key"
NODE_ENV="development"
NEXT_PUBLIC_URL="http://localhost:3000"
```

### Setting up Telegram Integration

1. Create a new bot with [@BotFather](https://t.me/botfather) on Telegram
2. Copy the bot token provided
3. Start a chat with your bot
4. Get your chat ID by:
   - Add your `bot` in a group as `admin`
   - Then send `/id` to [@rosebot](https://t.me/MissRose_bot)
   - Boom! you get your `id`

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/ShubhamPP04/sleek-portfolio.git
   cd sleek-portfolio
   ```

2. Install dependencies:

   ```bash
   # Using bun (recommended)
   bun install

   # Using npm
   npm install
   ```

3. Set up environment variables (see Environment Variables section below)

4. Run the development server:

   ```bash
   # Using bun
   bun dev

   # Using npm
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Troubleshooting

### Common Deployment Issues

#### ERESOLVE Dependency Resolution Error (Vercel/Production)

If you encounter dependency resolution errors during deployment, particularly with `next-view-transitions` and React 19, try these solutions:

**Solution 1: Use Legacy Peer Deps (Recommended)**
```bash
# Create .npmrc file in root directory
echo "legacy-peer-deps=true" > .npmrc
```

**Solution 2: Force Resolution (package.json)**
Add this to your `package.json`:
```json
{
  "overrides": {
    "next-view-transitions": {
      "react": "^19.0.0",
      "react-dom": "^19.0.0"
    }
  }
}
```

**Solution 3: Use npm with --force flag**
```bash
npm install --force
```

**Solution 4: Remove next-view-transitions (if not needed)**
```bash
npm uninstall next-view-transitions
```

#### Vercel Build Settings

If deploying to Vercel, set these environment variables in your Vercel dashboard:
- `NPM_FLAGS="--legacy-peer-deps"`
- Or add to your `vercel.json`:
```json
{
  "buildCommand": "npm install --legacy-peer-deps && npm run build"
}
```

#### Node.js Version Issues

Ensure you're using the correct Node.js version:
- Add `.nvmrc` file with `18` or `20`
- Or specify in `package.json`:
```json
{
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### Git Sync Issues

#### Branch Divergence
If you see "Your branch and 'origin/main' have diverged", try these solutions:

**Solution 1: Pull with rebase (Recommended)**
```bash
git pull --rebase origin main
```

**Solution 2: Force push (if you want to keep local changes)**
```bash
git push --force-with-lease origin main
```

**Solution 3: Reset to remote (if you want remote changes)**
```bash
git fetch origin
git reset --hard origin/main
```

**Solution 4: Merge approach**
```bash
git pull origin main
# Resolve any conflicts, then:
git push origin main
```

#### Common Git Sync Problems

**Problem: "Updates were rejected because the remote contains work"**
```bash
# Check what's different
git fetch origin
git log --oneline HEAD..origin/main
git log --oneline origin/main..HEAD

# Then choose merge or rebase
git pull --rebase origin main
```

**Problem: "Authentication failed"**
```bash
# For GitHub, use personal access token
git config --global credential.helper store
# Or use SSH keys (recommended)
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

**Problem: "Working tree is dirty"**
```bash
# Stash changes temporarily
git stash
git pull origin main
git stash pop
```

#### GitHub Desktop/VS Code Sync Issues

If using GitHub Desktop or VS Code:
1. Check if you're signed in to the correct account
2. Try refreshing the repository
3. Use terminal commands as fallback
4. Check repository permissions

## Configuration

The project uses configuration files in the `src/config` directory for easy customization:

- `About.tsx` - About section content
- `Contact.tsx` - Contact form settings
- `Experience.tsx` - Work experience details
- `Footer.tsx` - Footer links and content
- `Gears.tsx` - Setup/gear section
- `Hero.tsx` - Hero section content
- `Meta.tsx` - SEO and metadata
- `Navbar.tsx` - Navigation links
- `Projects.tsx` - Project showcase settings
- `Quote.ts` - Random quotes configuration
- `Resume.ts` - Resume section details
- `Setup.tsx` - Development setup information

## Adding New Technology Icons

1. Visit [Devicon](https://devicon.dev/) to find the icon you want to add
2. Create a new component in `src/components/technologies/`
3. Follow the existing component structure for consistency

Example:

```tsx
export const NewTechIcon = () => {
  return <svg>// SVG content from devicon</svg>;
};
```

## Adding Content

### Projects

1. Create a new MDX file in `src/data/projects/`
2. Add metadata and content following existing project structure
3. Add project thumbnail in `public/project/`
4. Update the projects configuration in `src/config/Projects.tsx`

### Work Experience

1. Update the experience data in `src/config/Experience.tsx`
2. Add company logos to `public/company/`

### Personal Information

1. Update personal details in `src/config/About.tsx`
2. Modify hero section in `src/config/Hero.tsx`
3. Update contact information in `src/config/Contact.tsx`
4. Customize metadata in `src/config/Meta.tsx`

## Contact

- **Email**: shubhampp8001@gmail.com
- **GitHub**: [@ShubhamPP04](https://github.com/ShubhamPP04)
- **LinkedIn**: [shubham-kumar-48420b249](https://linkedin.com/in/shubham-kumar-48420b249)
- **Twitter**: [@ShubhamPP04](https://twitter.com/ShubhamPP04)

## Acknowledgments

- Original template by [@ramxcodes](https://github.com/ramxcodes)
- Icons from [Devicon](https://devicon.dev/)
- UI components from [Shadcn UI](https://ui.shadcn.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
